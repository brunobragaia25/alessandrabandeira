"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WA_DEFAULT } from "@/lib/data";

const LINKS = [
  { href: "#planos", label: "Planos" },
  { href: "#como", label: "Como funciona" },
  { href: "#quem", label: "Quem sou" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 z-50 flex justify-center px-3 transition-[top] duration-400 ${
        scrolled ? "top-2.5" : "top-3 dt:top-5"
      }`}
    >
      <nav
        className={`pointer-events-auto flex w-full items-center justify-between gap-4 rounded-full border border-line-dark bg-ink/85 shadow-[0_10px_40px_rgba(0,0,0,.25)] backdrop-blur-[14px] transition-[max-width,padding] duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
          scrolled
            ? "max-w-full py-1.5 pr-1.5 pl-4 dt:max-w-[860px]"
            : "max-w-[1180px] py-2 pr-2 pl-3 dt:py-3 dt:pr-3 dt:pl-[22px]"
        }`}
      >
        <a href="#topo" className="flex items-center gap-2.5 text-off">
          <Image
            src="/images/fotos/alessandra-perfil-150.jpg"
            alt="Alessandra Bandeira"
            width={34}
            height={34}
            className="size-[34px] flex-none rounded-full object-cover dt:hidden"
          />
          <span className="glow-a-lit -mr-1.5 text-[34px]" aria-hidden="true">
            A
          </span>
          <span className="flex flex-col gap-0.5" aria-label="Alessandra Bandeira, planos de saúde">
            <span className="font-display whitespace-nowrap text-[11px] tracking-[.14em] min-[420px]:text-[12px] min-[420px]:tracking-[.22em]">LESSANDRA BANDEIRA</span>
            <span className="text-[11px] tracking-[.02em] text-gray">planos de saúde</span>
          </span>
        </a>
        <div className="hidden gap-7 text-[14px] dt:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-pale transition-colors hover:text-amber-light">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener"
          className="flex-none whitespace-nowrap rounded-full bg-amber px-[18px] py-2.5 text-[14px] font-semibold text-ink transition-colors hover:bg-halo"
        >
          Cotar<span className="hidden min-[420px]:inline"> agora</span>
        </a>
      </nav>
    </header>
  );
}
