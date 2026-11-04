"use client";

import { useState } from "react";
import { DICAS, FAQS, wa } from "@/lib/data";
import SplitText from "./SplitText";
import { btn, Eyebrow } from "./ui";

const h2 = "font-display m-0 mb-6 text-[clamp(26px,3vw,38px)] leading-[1.1] font-normal";

function Accordion({
  items,
  initial,
  numbered,
}: {
  items: { t: string; a: string }[];
  initial: number | null;
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(initial);
  return (
    <div className="border-t border-text">
      {items.map((q, i) => {
        const on = open === i;
        return (
          <div key={q.t} className="border-b border-line">
            <button
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : i)}
              className="flex w-full cursor-pointer items-center gap-4 border-none bg-transparent py-[18px] text-left text-text"
            >
              {numbered && <span className="flex-none font-mono text-[13px] text-amber-dark">0{i + 1}</span>}
              <span className="flex-1 text-[17px] font-medium">{q.t}</span>
              <span className="font-mono text-[18px] text-gray">{on ? "−" : "+"}</span>
            </button>
            {on && (
              <p
                className={`swap-in m-0 pb-5 text-[15px] leading-[1.6] text-body text-pretty ${numbered ? "pl-10" : ""}`}
              >
                {q.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Duvidas() {
  return (
    <section id="duvidas" className="mx-auto max-w-[1240px] scroll-mt-[90px] px-4 pb-[72px] dt:px-8 dt:pb-[120px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-x-16 gap-y-12">
        <div>
          <Eyebrow>GUIA RÁPIDO</Eyebrow>
          <SplitText as="h2" className={h2}>
            5 dicas para escolher seu plano
          </SplitText>
          <Accordion items={DICAS} initial={0} numbered />
        </div>
        <div>
          <Eyebrow>DÚVIDAS</Eyebrow>
          <SplitText as="h2" className={h2}>
            Perguntas que eu mais recebo
          </SplitText>
          <Accordion items={FAQS} initial={3} />
          <div className="mt-6">
            <a
              href={wa("Olá, Alessandra! Tenho uma dúvida sobre plano de saúde.")}
              target="_blank"
              rel="noopener"
              className={btn.link}
            >
              Ficou outra dúvida? Fala comigo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
