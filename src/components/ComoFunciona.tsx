import { STEPS, WA_DEFAULT } from "@/lib/data";
import SplitText from "./SplitText";
import { btn, Eyebrow, h2Class } from "./ui";

export default function ComoFunciona() {
  return (
    <section id="como" className="mx-auto max-w-[1240px] scroll-mt-[90px] px-4 pb-[72px] dt:px-8 dt:pb-[120px]">
      <Eyebrow>COMO FUNCIONA</Eyebrow>
      <SplitText as="h2" className={`${h2Class} mb-9 max-w-[720px]`}>
        Como funciona a consultoria
      </SplitText>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(230px,1fr))] border-t border-line p-0">
        {STEPS.map((s, i) => (
          <li key={s.t} className="border-b border-line">
            <div
              className="reveal flex flex-col gap-3.5 pt-7 pr-6 pb-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-2.5">
                <span className="font-display text-[72px] leading-[.9]">{i + 1}</span>
                <span className="glow-a-dot text-[16px]">A</span>
              </div>
              <span className="font-display text-[21px] leading-[1.2]">{s.t}</span>
              <span className="text-[15px] leading-[1.55] text-body text-pretty">{s.d}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-7">
        <a href={WA_DEFAULT} target="_blank" rel="noopener" className={btn.amber}>
          Começar minha análise grátis →
        </a>
      </div>
    </section>
  );
}
