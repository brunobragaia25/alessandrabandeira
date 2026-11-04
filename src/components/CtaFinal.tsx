import { WA_DEFAULT, WA_DISPLAY } from "@/lib/data";
import SplitText from "./SplitText";
import { BigGlowA, ChatIcon, Seal } from "./ui";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pt-24 pb-[88px] text-off dt:px-8 dt:pt-40 dt:pb-[150px]">
      <BigGlowA
        blur={26}
        haloOpacity={0.8}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] [--a:460px] dt:[--a:900px]"
        style={{ width: "var(--a)", height: "var(--a)" }}
      />
      <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-[26px] text-center">
        <Seal id="seal-cta" glyph="40px" className="relative size-[130px]" />
        <SplitText
          as="h2"
          className="font-display m-0 text-[clamp(34px,6vw,76px)] leading-[1.04] font-normal text-balance"
        >
          Fala comigo e solicita já sua cotação.
        </SplitText>
        <SplitText variant="fade" className="m-0 max-w-[520px] text-[17px] leading-[1.55] text-pale">
          Estou pronta para te ajudar a encontrar o plano de saúde perfeito para você.
        </SplitText>
        <div className="reveal">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3.5 rounded-[2px] bg-amber px-8 py-5 text-[18px] font-semibold text-ink shadow-[0_0_50px_rgb(232_176_74/.35)] transition-colors hover:bg-halo"
          >
            <ChatIcon size={22} />
            Pedir cotação no WhatsApp
          </a>
        </div>
        <div className="font-mono text-[13px] text-amber">{WA_DISPLAY}</div>
        <p className="m-0 text-[14px] text-mute">Atendo Recife e região: Boa Viagem, Várzea, Caxangá…</p>
      </div>
    </section>
  );
}
