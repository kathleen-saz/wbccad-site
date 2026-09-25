import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wbccad.com"),
  title: "WBCcad — Projetos, orçamentos e produção em um só fluxo",
  description:
    "Software CAD especializado para layouts comerciais, refrigeração, armazenagem e mobiliário — do projeto executivo à lista de materiais.",
  openGraph: {
    title: "WBCcad — Do layout ao orçamento, sem perder um parafuso",
    description:
      "Automatize layouts, cálculos, listas de materiais e propostas com uma plataforma configurada para o seu produto.",
    type: "website",
    locale: "pt_BR",
    siteName: "WBCcad",
  },
  twitter: {
    card: "summary_large_image",
    title: "WBCcad — Projetos e orçamentos em um só fluxo",
    description: "CAD especializado para transformar layouts em entregas precisas.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${plexMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
