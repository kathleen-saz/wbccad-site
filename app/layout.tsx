import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wbccad.com"),
  title: "WBCcad — Projete, orce e produza sem refazer o trabalho",
  description:
    "Software CAD especializado que mantém layout, lista de materiais, orçamento e documentação no mesmo projeto.",
  openGraph: {
    title: "WBCcad — Projete, orce e produza",
    description:
      "Mude o layout e mantenha materiais, custos e documentação no mesmo projeto.",
    type: "website",
    locale: "pt_BR",
    siteName: "WBCcad",
  },
  twitter: {
    card: "summary_large_image",
    title: "WBCcad — Projete, orce e produza",
    description: "CAD especializado para manter projeto, materiais e orçamento juntos.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
