import type { CSSProperties, ReactNode } from "react";

/** Rótulo pequeno em caixa alta acima dos títulos. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`font-display mb-3.5 text-[12px] tracking-[.24em] text-gray ${className}`}>{children}</div>
  );
}

export const h2Class = "m-0 font-display font-normal text-[clamp(28px,3.6vw,44px)] leading-[1.1] text-balance";

/** "A" pequeno iluminado, usado como marcador de lista. */
export function ADot({ size = 13 }: { size?: number }) {
  return (
    <span aria-hidden="true" className="glow-a-dot flex-none" style={{ fontSize: size }}>
      A
    </span>
  );
}

/** "A" gigante do letreiro: halo de luz atrás + letra escura com contorno. */
export function BigGlowA({
  className = "",
  style,
  blur = 28,
  haloOpacity = 1,
  signOn = false,
}: {
  className?: string;
  style?: CSSProperties;
  blur?: number;
  haloOpacity?: number;
  signOn?: boolean;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`} style={style}>
      <div className={`absolute inset-0 ${signOn ? "sign-on" : ""}`}>
        <div
          className="breathe absolute -inset-[12%]"
          style={{
            background:
              "radial-gradient(closest-side, rgb(246 231 198 / .3), rgb(232 176 74 / .14) 45%, rgb(232 176 74 / 0) 75%)",
          }}
        />
        <div
          className="font-display absolute inset-0 flex items-center justify-center leading-none text-halo"
          style={{ fontSize: "var(--a)", filter: `blur(${blur}px)`, opacity: haloOpacity }}
        >
          A
        </div>
      </div>
      <div
        className="font-display absolute inset-0 flex items-center justify-center leading-none text-[#0E0E11]"
        style={{ fontSize: "var(--a)", WebkitTextStroke: "1px rgb(246 231 198 / .35)" }}
      >
        A
      </div>
    </div>
  );
}

/** Selo redondo girando: "CONSULTORIA GRATUITA • SEM CUSTO A MAIS •". */
export function Seal({ id, glyph, className = "" }: { id: string; glyph: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full border border-line-dark bg-ink shadow-[0_0_40px_rgb(232_176_74/.25)] ${className}`}
    >
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id={id} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text fill="#F6E7C6" style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 500, letterSpacing: 2 }}>
          <textPath href={`#${id}`} textLength="474" lengthAdjust="spacing">
            CONSULTORIA GRATUITA • SEM CUSTO A MAIS •
          </textPath>
        </text>
      </svg>
      <span className="glow-a" style={{ fontSize: glyph }}>
        A
      </span>
    </div>
  );
}

export function ChatIcon({ size = 20, stroke = "#0B0B0D" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={stroke} strokeWidth="1.4" aria-hidden="true">
      <path d="M2 3.5h12v8H6l-3 2.5v-2.5H2z" />
    </svg>
  );
}

/** Botões retos (raio 2px) nas três variações do design. */
export const btn = {
  dark: "inline-flex items-center gap-2.5 rounded-[2px] bg-ink px-[22px] py-3.5 text-[15px] font-semibold text-off transition-colors hover:bg-graphite hover:text-halo",
  amber:
    "inline-flex items-center gap-2.5 rounded-[2px] bg-amber px-[22px] py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-amber-dark",
  link: "inline-flex items-center gap-2.5 border-b border-amber pb-1 font-semibold text-text transition-colors hover:text-amber-dark",
};
