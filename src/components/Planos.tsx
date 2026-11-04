"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BASE_MSG, PLANOS, type Plano, TABS, type TabId, wa } from "@/lib/data";
import SplitText from "./SplitText";
import { ADot, btn, Eyebrow, h2Class } from "./ui";

export default function Planos() {
  const [tab, setTab] = useState<TabId>("eu");
  const [modal, setModal] = useState<Plano | null>(null);
  const current = TABS.find((t) => t.id === tab)!;

  // O simulador do hero troca a aba quando o visitante escolhe o perfil
  useEffect(() => {
    const on = (e: Event) => setTab((e as CustomEvent<TabId>).detail);
    window.addEventListener("ab:tab", on);
    return () => window.removeEventListener("ab:tab", on);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [modal]);

  const planHref = (p: Plano) =>
    wa(`${BASE_MSG}\nTenho interesse no plano: ${p.nome}${p.preco ? ` (a partir de R$ ${p.preco})` : ""}.`);

  return (
    <section id="planos" className="mx-auto max-w-[1240px] scroll-mt-[90px] px-4 pb-[72px] dt:px-8 dt:pb-[120px]">
      <Eyebrow>PLANOS</Eyebrow>
      <SplitText as="h2" className={`${h2Class} mb-7`}>
        Encontre o plano pelo seu perfil
      </SplitText>

      <div role="tablist" className="no-scrollbar mb-2 flex overflow-x-auto border-b border-line">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`mr-[22px] -mb-px flex-none cursor-pointer border-b-2 bg-transparent py-3.5 pr-[22px] text-[16px] font-medium whitespace-nowrap transition-colors ${
              tab === t.id ? "border-amber text-text" : "border-transparent text-gray hover:text-text"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div key={tab} className="swap-in">
        {current.intro && (
          <p className="font-display mt-6 mb-1 max-w-[720px] text-[clamp(20px,2.4vw,28px)] leading-[1.25]">
            {current.intro}
          </p>
        )}
        {PLANOS[tab].map((p) => (
          <div
            key={p.nome}
            className="grid grid-cols-1 items-center gap-x-8 gap-y-3.5 border-b border-line py-[26px] dt:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,.8fr)_auto]"
          >
            <div className="flex min-w-0 flex-col gap-1.5">
              <span className="font-display text-[23px] leading-[1.15]">{p.nome}</span>
              <span className="text-[12px] tracking-[.12em] text-soft uppercase">{p.op}</span>
            </div>
            <div className="flex min-w-0 flex-col gap-[7px] text-[15px]">
              <span className="flex items-baseline gap-2.5">
                <ADot />
                {p.h1}
              </span>
              <span className="flex items-baseline gap-2.5">
                <ADot />
                {p.h2}
              </span>
              {p.extra && <span className="text-[13px] leading-[1.45] text-soft text-pretty">{p.extra}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-soft">
                {p.preco ? "a partir de" : tab === "odo" ? "valores" : "empresarial"}
              </span>
              <span className="font-mono text-[26px] tracking-[-.02em] whitespace-nowrap">
                {p.preco ? `R$ ${p.preco}` : "Sob cotação"}
              </span>
              {p.tabela && (
                <button
                  type="button"
                  onClick={() => setModal(p)}
                  className="cursor-pointer self-start border-none bg-transparent p-0 text-[12px] text-amber-dark underline underline-offset-[3px]"
                >
                  Ver tabela completa
                </button>
              )}
            </div>
            <a
              href={planHref(p)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 justify-self-start rounded-[2px] bg-ink px-5 py-[13px] text-[14px] font-semibold whitespace-nowrap text-off transition-colors hover:bg-amber hover:text-ink"
            >
              Quero esse <span>→</span>
            </a>
          </div>
        ))}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-[26px]">
          <span className="text-[14px] text-soft">Não achou o seu caso? Eu monto a comparação para você.</span>
          <a href={wa(`${BASE_MSG}\nPerfil: ${current.label}.`)} target="_blank" rel="noopener" className={btn.amber}>
            {current.cta} →
          </a>
        </div>
      </div>

      {modal?.tabela && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Tabela completa: ${modal.nome}`}
          onClick={() => setModal(null)}
          className="fade-in fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-[760px] flex-col gap-4 rounded-[2px] bg-off p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] tracking-[.14em] text-gray">TABELA COMPLETA</div>
                <div className="font-display text-[22px]">{modal.nome}</div>
              </div>
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setModal(null)}
                className="size-10 cursor-pointer rounded-[2px] border border-line bg-transparent text-[18px]"
              >
                ×
              </button>
            </div>
            <div className="relative aspect-[4/3] max-h-[65vh] w-full">
              <Image src={modal.tabela} alt={`Tabela de preços ${modal.nome}`} fill className="object-contain" sizes="760px" />
            </div>
            <a
              href={planHref(modal)}
              target="_blank"
              rel="noopener"
              className="inline-flex gap-2.5 self-start rounded-[2px] bg-ink px-5 py-[13px] text-[14px] font-semibold text-off transition-colors hover:bg-amber hover:text-ink"
            >
              Quero esse →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
