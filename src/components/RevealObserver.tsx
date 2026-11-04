"use client";

import { useEffect } from "react";

/** Liga as entradas .reveal / .clip ao scroll. A animação em si é CSS (globals.css). */
export default function RevealObserver() {
  useEffect(() => {
    let pending = [...document.querySelectorAll<HTMLElement>(".reveal, .reveal-row, .clip, .split")];
    const show = (el: Element) => el.classList.add("is-in");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          show(e.target);
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    pending.forEach((el) => io.observe(el));

    // Fallback: o IO pode atrasar ou pular entradas em rolagens rápidas (ex.: âncoras do menu).
    let raf = 0;
    const check = () => {
      raf = 0;
      const limit = window.innerHeight * 0.95;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= limit) return true;
        show(el);
        return false;
      });
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
