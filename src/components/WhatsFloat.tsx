import { WA_DEFAULT } from "@/lib/data";
import { ChatIcon } from "./ui";

export default function WhatsFloat() {
  return (
    <>
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener"
        aria-label="Cotação grátis no WhatsApp"
        className="fixed right-6 bottom-6 z-[60] hidden items-center gap-2.5 rounded-full bg-wa py-3.5 pr-5 pl-4 text-[14px] font-semibold text-ink shadow-[0_10px_30px_rgba(0,0,0,.3)] transition-transform hover:-translate-y-0.5 dt:flex"
      >
        <ChatIcon />
        Cotação grátis
      </a>
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener"
        className="fixed inset-x-0 bottom-0 z-[60] flex h-[58px] items-center justify-center gap-2.5 bg-wa text-[16px] font-semibold text-ink dt:hidden"
      >
        <ChatIcon />
        Cotação grátis no WhatsApp
      </a>
    </>
  );
}
