import Comparativo from "@/components/Comparativo";
import ComoFunciona from "@/components/ComoFunciona";
import CtaFinal from "@/components/CtaFinal";
import Depoimentos from "@/components/Depoimentos";
import Duvidas from "@/components/Duvidas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Operadoras from "@/components/Operadoras";
import Planos from "@/components/Planos";
import QuemSou from "@/components/QuemSou";
import RevealObserver from "@/components/RevealObserver";
import WhatsFloat from "@/components/WhatsFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Operadoras />
        <Planos />
        <Comparativo />
        <ComoFunciona />
        <QuemSou />
        <Depoimentos />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsFloat />
      <RevealObserver />
    </>
  );
}
