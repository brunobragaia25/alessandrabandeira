import { INSTAGRAM, WA_DEFAULT, WA_DISPLAY } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink px-4 pt-12 pb-24 text-pale dt:px-8 dt:pt-14 dt:pb-12">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
        <div className="flex items-center gap-1">
          <span className="glow-a-lit text-[52px]" aria-hidden="true">
            A
          </span>
          <span className="flex flex-col gap-1">
            <span className="font-display text-[14px] tracking-[.22em] text-off">LESSANDRA BANDEIRA</span>
            <span className="text-[13px] text-gray">planos de saúde</span>
          </span>
        </div>
        <div className="flex flex-col gap-2 text-[14px]">
          <span className="text-[11px] tracking-[.2em] text-gray">CONTATO</span>
          <a href={WA_DEFAULT} target="_blank" rel="noopener" className="text-off transition-colors hover:text-amber">
            WhatsApp {WA_DISPLAY}
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-off transition-colors hover:text-amber">
            Instagram @alebandeiraplanosdesaude
          </a>
        </div>
        <div className="flex flex-col gap-2 text-[14px]">
          <span className="text-[11px] tracking-[.2em] text-gray">ATENDIMENTO</span>
          <span>Consultora de planos de saúde · Recife/PE</span>
          <span className="font-mono text-[12px] text-gray">CNPJ (a confirmar) · Registro (a confirmar)</span>
        </div>
      </div>
      <div className="mx-auto mt-9 max-w-[1240px] border-t border-line-dark pt-5 text-[12px] leading-normal text-gray">
        Os valores são de referência e podem mudar conforme a operadora, a idade e a data de contratação.
      </div>
    </footer>
  );
}
