import type { CSSProperties } from "react";
import { HERO } from "@/lib/data";
import Simulator from "./Simulator";
import { Seal } from "./ui";

const icons = [
  <svg key="c" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#E8B04A" strokeWidth="1.3">
    <circle cx="8" cy="8" r="6.5" />
    <path d="M5 8.2l2 2 4-4.4" />
  </svg>,
  <svg key="w" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#E8B04A" strokeWidth="1.3">
    <path d="M2 3.5h12v8H6l-3 2.5v-2.5H2z" />
  </svg>,
  <svg key="p" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#E8B04A" strokeWidth="1.3">
    <circle cx="8" cy="5" r="2.6" />
    <path d="M3 14c.6-2.8 2.6-4.3 5-4.3s4.4 1.5 5 4.3" />
  </svg>,
];

export default function Hero() {
  const words = [...HERO.h1.map((w) => ({ w, glow: false })), ...HERO.h1Glow.map((w) => ({ w, glow: true }))];

  return (
    <section
      id="topo"
      className="relative min-h-screen overflow-hidden bg-ink px-4 pt-[92px] pb-16 text-off dt:px-8 dt:pt-[150px] dt:pb-24"
    >
      <div aria-hidden="true" className="hero-grid sign-on pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="hero-glow breathe pointer-events-none absolute top-[55%] left-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 dt:size-[1000px]"
      />

      <div className="relative mx-auto flex max-w-[760px] flex-col items-center text-center">
        <h1 className="font-display m-0 flex flex-wrap justify-center gap-x-[.26em] text-[clamp(32px,6vw,72px)] leading-[1.06] font-normal tracking-[-.01em] text-balance">
          {words.map(({ w, glow }, i) => (
            <span key={i} className="word">
              <span style={{ "--i": i } as CSSProperties} className={glow ? "text-halo" : undefined}>
                {w}
              </span>
            </span>
          ))}
        </h1>
        <div className="reveal mt-3.5 mb-6 dt:mt-[22px] dt:mb-11" style={{ transitionDelay: "600ms" }}>
          <p className="m-0 max-w-[560px] text-[clamp(15px,1.6vw,18px)] leading-[1.55] text-pale text-pretty">{HERO.sub}</p>
        </div>

        <div className="relative w-full max-w-[640px]">
          <Seal
            id="seal-hero"
            glyph="var(--g)"
            className="absolute z-[2] -top-[46px] -right-1.5 size-[84px] [--g:24px] dt:-top-16 dt:-right-[84px] dt:size-[140px] dt:[--g:42px]"
          />
          <div className="reveal" style={{ transitionDelay: "700ms" }}>
            <Simulator />
          </div>
        </div>

        <div
          className="reveal mt-7 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-[13px] text-pale"
          style={{ transitionDelay: "800ms" }}
        >
          {HERO.trust.map((t, i) => (
            <span key={t} className="flex items-center gap-2">
              {icons[i]}
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
