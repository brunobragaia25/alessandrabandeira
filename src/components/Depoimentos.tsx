import { DEPOIMENTOS, WA_DEFAULT } from "@/lib/data";
import SplitText from "./SplitText";
import { btn, Eyebrow, h2Class } from "./ui";

export default function Depoimentos() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-[72px] dt:px-8 dt:py-[120px]">
      <Eyebrow>DEPOIMENTOS</Eyebrow>
      <SplitText as="h2" className={`${h2Class} mb-8`}>
        Sua saúde merece toda a atenção e cuidado.
      </SplitText>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {DEPOIMENTOS.map((d, i) => (
          <div key={d.perfil} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <figure className="m-0 flex h-full min-h-[260px] flex-col gap-4 rounded-[2px] border border-line bg-white p-7">
              <span aria-hidden="true" className="font-display h-10 text-[84px] leading-[.6] text-amber">
                “
              </span>
              <blockquote className="m-0 flex-1 text-[16px] leading-[1.6] text-soft italic">{d.t}</blockquote>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line-soft pt-3.5">
                <span className="text-[13px] text-body">{d.perfil}</span>
                <span className="font-mono text-[11px] text-amber-dark">[depoimento a coletar]</span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      <div className="mt-7">
        <a href={WA_DEFAULT} target="_blank" rel="noopener" className={btn.dark}>
          Cuide de você e de quem você ama →
        </a>
      </div>
    </section>
  );
}
