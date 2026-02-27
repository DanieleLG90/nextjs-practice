import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"

import "./globals.css";

import Image from "next/image"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"

import Link from "next/link"

// Configurazione dei font
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})
// Metadata della pagina
export const metadata: Metadata = {
  title: "Next.js Practice | Daniele",
  description: "Progetto creato da zero con Next.js, Tailwind e TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${albertSans.className} ${montserratAlternates.variable} antialiased w-screen min-h-screen flex flex-col justify-center items-center`}>

        <header className="w-full flex justify-between p-3 shadow">
          <Link href="/">
            <Image className="w-8" src={PFLogoIcon} alt="printforge logo" />
          </Link>
          <nav className="flex items-center">
            <ul className="flex items-center gap-4 text-sm">
              <li><Link href="/3d-models"> 3D MODELS </Link></li>
              <li><Link href="about"> ABOUT </Link></li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}