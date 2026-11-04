"use client";

import { useState } from "react";
import { ACOM, BASE_MSG, IDADES, QUEM, type QuemId, wa } from "@/lib/data";

const TAB_FOR: Record<QuemId, string> = { eu: "eu", fam: "eu", "59": "59", emp: "emp" };

const opt = (on: boolean) =>
  `cursor-pointer rounded-[2px] border transition-colors duration-200 ${
    on ? "border-ink bg-ink text-off" : "border-line bg-white text-text hover:border-gray"
  }`;

export default function Simulator() {
  const [quem, setQuem] = useState<QuemId>("eu");
  const [idade, setIdade] = useState("34–38");
  const [acom, setAcom] = useState("Apartamento");

  const q = QUEM.find((x) => x.id === quem)!;
  const idadeTxt = `${idade} anos`;
  const summary = quem === "59" ? `${q.sum} · ${acom}` : `${q.sum} · ${idadeTxt} · ${acom}`;
  const href = wa(`${BASE_MSG}\n• Para: ${q.msg}\n• Idade do titular: ${idadeTxt}\n• Acomodação: ${acom}`);

  const pickQuem = (id: QuemId) => {
    setQuem(id);
    if (id === "59") setIdade("59+");
    else if (idade === "59+" && quem === "59") setIdade("34–38");
    // Sincroniza a aba da seção "Planos" com o perfil escolhido
    window.dispatchEvent(new CustomEvent("ab:tab", { detail: TAB_FOR[id] }));
  };
  const pickIdade = (a: string) => {
    setIdade(a);
    if (a === "59+" && quem === "eu") setQuem("59");
    else if (quem === "59" && a !== "59+") setQuem("eu");
  };

  return (
    <div className="relative rounded-[2px] bg-off px-[18px] py-[22px] text-left text-text shadow-[0_30px_80px_rgba(0,0,0,.5),0_0_0_1px_rgb(246_231_198/.15)] dt:px-[34px] dt:py-8">
      <div className="mb-[18px] font-mono text-[11px] tracking-[.14em] text-gray">SIMULADOR DE COTAÇÃO · GRÁTIS</div>

      <div className="font-display mb-2.5 text-[19px]">Para quem é o plano?</div>
      <div className="mb-[22px] grid grid-cols-[repeat(auto-fit,minmax(118px,1fr))] gap-1.5">
        {QUEM.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={quem === o.id}
            onClick={() => pickQuem(o.id)}
            className={`${opt(quem === o.id)} px-2.5 py-[11px] text-[14px] font-medium`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="font-display mb-1 text-[19px]">Qual a idade do titular?</div>
      <div className="mb-2.5 text-[12px] text-soft">Faixas etárias da ANS</div>
      <div className="mb-[22px] grid grid-cols-5 gap-1.5">
        {IDADES.map((a) => (
          <button
            key={a}
            type="button"
            aria-pressed={idade === a}
            onClick={() => pickIdade(a)}
            className={`${opt(idade === a)} px-0.5 py-2.5 font-mono text-[13px]`}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="font-display mb-2.5 text-[19px]">Acomodação</div>
      <div className="mb-6 grid grid-cols-3 gap-1.5">
        {ACOM.map((a) => (
          <button
            key={a}
            type="button"
            aria-pressed={acom === a}
            onClick={() => setAcom(a)}
            className={`${opt(acom === a)} px-1.5 py-[11px] text-[14px] font-medium`}
          >
            {a}
          </button>
        ))}
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-between gap-4 rounded-[2px] bg-ink px-5 py-4 text-off transition-colors hover:bg-graphite"
      >
        <span className="flex min-w-0 flex-col gap-1">
          <span className="text-[16px] font-semibold">Receber minha cotação no WhatsApp</span>
          <span key={summary} className="swap-in font-mono text-[12px] text-amber">
            {summary}
          </span>
        </span>
        <span className="flex size-[38px] flex-none items-center justify-center rounded-full bg-amber text-[18px] text-ink">
          →
        </span>
      </a>
      <div className="mt-2.5 text-[12px] text-soft">Abre o WhatsApp com a mensagem pronta. Você só aperta enviar.</div>
    </div>
  );
}
