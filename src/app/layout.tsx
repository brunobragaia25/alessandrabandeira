import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Mrs_Saint_Delafield, Tenor_Sans } from "next/font/google";
import "./globals.css";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400", variable: "--font-tenor" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-dm-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });
const hand = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--font-saint" });

export const metadata: Metadata = {
  title: "Alessandra Bandeira · Consultora de Planos de Saúde · Recife",
  description:
    "Comparo as principais operadoras de Recife (Hapvida, Fox Saúde, SF Saúde, MedSênior, Saúde Aires, Select e mais) e te mostro a melhor condição para a sua idade. Consultoria gratuita pelo WhatsApp.",
  icons: { icon: "/brand/alessandra-symbol.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${tenor.variable} ${dmSans.variable} ${dmMono.variable} ${hand.variable}`}
    >
      <head>
        {/* Marca .js antes da pintura para as entradas .reveal/.clip não piscarem */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
