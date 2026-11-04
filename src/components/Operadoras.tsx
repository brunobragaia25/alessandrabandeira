import Image from "next/image";
import { OPERADORAS, WA_DEFAULT } from "@/lib/data";
import SplitText from "./SplitText";
import { btn, Eyebrow, h2Class } from "./ui";

export default function Operadoras() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-[72px] dt:px-8 dt:py-[120px]">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-[640px]">
          <Eyebrow>OPERADORAS COM QUEM TRABALHO</Eyebrow>
          <SplitText as="h2" className={h2Class}>
            As principais operadoras de Recife, num só atendimento.
          </SplitText>
        </div>
        <a href={WA_DEFAULT} target="_blank" rel="noopener" className={btn.link}>
          Comparar para mim →
        </a>
      </div>
      <div className="grid grid-cols-2 border-t border-l border-line dt:grid-cols-7">
        {OPERADORAS.map((op) => (
          <div
            key={op.nome}
            title={op.nome}
            className="group flex min-h-[104px] flex-col items-center justify-center gap-1.5 border-r border-b border-line px-3 py-[18px] text-center text-mute transition-colors duration-[250ms] hover:bg-white hover:text-text"
          >
            {op.logo ? (
              /* Logos em cinza que ganham cor no hover */
              <span className="relative block w-full max-w-[130px]" style={{ height: op.h ?? 34 }}>
                <Image
                  src={op.logo}
                  alt={op.nome}
                  fill
                  unoptimized
                  sizes="130px"
                  className="object-contain opacity-55 grayscale transition-[filter,opacity] duration-[250ms] group-hover:opacity-100 group-hover:grayscale-0"
                />
              </span>
            ) : (
              <span className="text-[16px] font-semibold tracking-[-.01em]">{op.nome}</span>
            )}
            {op.sub && <span className="text-[11px]">{op.sub}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
