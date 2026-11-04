import { BASE_MSG, CMP_COLS, CMP_ROWS, TABELAS_REF, wa } from "@/lib/data";
import SplitText from "./SplitText";
import { btn, Eyebrow, h2Class } from "./ui";

const muted = (v: string) => v === "Consultar" || v === "—";

export default function Comparativo() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-[72px] dt:px-8 dt:py-[120px]">
      <Eyebrow>COMPARATIVO</Eyebrow>
      <SplitText as="h2" className={`${h2Class} mb-7`}>
        Compare lado a lado
      </SplitText>
      <div className="overflow-x-auto border-t border-text [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[920px] border-separate border-spacing-0 text-[14px]">
          <thead>
            <tr>
              <th className="sticky left-0 z-[1] w-[170px] border-r border-b border-line bg-off py-[18px] pr-4 text-left text-[12px] font-normal tracking-[.12em] text-gray">
                OPERADORA
              </th>
              {CMP_COLS.map((c) => (
                <th
                  key={c}
                  className="font-display border-r border-b border-line px-4 py-[18px] text-left text-[19px] font-normal"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CMP_ROWS.map((r, i) => (
              <tr key={r.label} className="reveal-row" style={{ transitionDelay: `${i * 90}ms` }}>
                <th className="sticky left-0 z-[1] border-r border-b border-line bg-off py-4 pr-4 text-left align-top font-medium">
                  {r.label}
                </th>
                {r.vals.map((v, j) => (
                  <td
                    key={j}
                    className={`border-r border-b border-line p-4 align-top leading-[1.45] ${
                      r.mono ? "font-mono text-[17px] whitespace-nowrap" : "text-[14px]"
                    } ${muted(v) ? "text-gray" : "text-text"}`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5 mb-0 text-[12px] leading-normal text-soft">
        Valores de referência por pessoa, na menor faixa etária, tabelas de {TABELAS_REF}, sujeitos a alteração pela
        operadora. Registro ANS de cada plano na cotação.
      </p>
      <div className="mt-6">
        <a
          href={wa(`${BASE_MSG}\nQuero comparar Fox, SF Saúde, Hapvida, Saúde Aires e MedSênior para a minha idade.`)}
          target="_blank"
          rel="noopener"
          className={btn.dark}
        >
          Quero comparar para a minha idade →
        </a>
      </div>
    </section>
  );
}
