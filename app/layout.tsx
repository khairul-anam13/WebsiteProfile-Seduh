import type { Metadata } from "next";
import { Anybody, Literata } from "next/font/google";
import "./globals.css";

const anybody = Anybody({ subsets: ["latin"], axes: ["wdth"], variable: "--font-anybody" });
const literata = Literata({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-literata" });

export const metadata: Metadata = {
  title: "Seduh — Teh Tarik & Kopi Klasik, Karanganyar",
  description:
    "Teh tarik, kopi Sanger, dan cokelat di Karanganyar dan Sragen. Buka 15.00 sampai tengah malam, harga Rp6.000–16.000.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${anybody.variable} ${literata.variable}`}>
      <body>{children}</body>
    </html>
  );
}
