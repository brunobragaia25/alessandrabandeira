import Image from "next/image";
import { SOBRE, WA_DEFAULT } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow } from "./ui";

export default function QuemSou() {
  return (
    <section id="quem" className="scroll-mt-[90px] px-4 pb-[72px] dt:px-8 dt:pb-[120px]">
      <div className="relative mx-auto flex max-w-[1000px] flex-wrap items-center gap-10 overflow-hidden bg-ink px-[22px] pt-9 pb-10 text-off dt:px-16 dt:py-14">
        <div
          aria-hidden="true"
          className="font-display pointer-events-none absolute -right-[60px] -bottom-[120px] text-[420px] leading-none text-[#0E0E11]"
          style={{ WebkitTextStroke: "1px rgb(246 231 198 / .12)", textShadow: "0 0 80px rgb(232 176 74 / .18)" }}
        >
          A
        </div>

        <div className="relative mx-auto h-[320px] w-[200px] flex-none dt:mx-0 dt:h-[400px] dt:w-[250px]">
          <div className="clip absolute inset-0">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/fotos/alessandra-retrato-blazer-361x640.jpg"
                alt="Alessandra Bandeira, consultora de planos de saúde"
                fill
                sizes="250px"
                className="object-cover object-top grayscale contrast-[1.05]"
              />
            </div>
          </div>
          <div className="absolute -right-7 bottom-6 h-[150px] w-24 overflow-hidden rounded-full border-4 border-ink">
            <Image
              src="/images/fotos/alessandra-evento-medsenior-361x640.jpg"
              alt="Alessandra em evento da MedSênior"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative min-w-0 flex-[1_1_320px]">
          <Eyebrow>CONSULTORA · RECIFE/PE</Eyebrow>
          <SplitText as="h2" className="font-display m-0 mb-5 text-[clamp(30px,4vw,48px)] leading-[1.05] font-normal">
            Quem sou eu?
          </SplitText>
          <SplitText variant="fade" className="m-0 mb-4 text-[17px] leading-[1.6] text-[#E4DFD5] text-pretty">
            {SOBRE.texto}
          </SplitText>
          <p className="reveal m-0 mb-1.5 text-[14px] leading-[1.6] text-mute">{SOBRE.bio}</p>
          <div
            className="font-hand mt-1 mb-3.5 text-[64px] leading-[1.1] text-amber"
            style={{ textShadow: "0 0 18px rgb(232 176 74 / .35)" }}
          >
            Alessandra
          </div>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-[2px] bg-amber px-5 py-[13px] text-[15px] font-semibold text-ink transition-colors hover:bg-halo"
          >
            Fala comigo →
          </a>
        </div>
      </div>
    </section>
  );
}
