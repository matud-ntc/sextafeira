import type { Metadata } from "next";
import { Quicksand, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400", // Anton solo tiene un peso
});

export const metadata: Metadata = {
  title: "Sextafeira",
  description: "Radio, música y más",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${quicksand.variable} ${anton.variable} theme-sextafeira`}>
      <body className="antialiased min-h-screen bg-[#cfc8f0] bg-[url('/Wave2.svg')] bg-no-repeat bg-top bg-cover bg-fixed">
        <Navbar />
        <main className="min-h-screen pb-[120px]">
          {children}
        </main>

        {/* Footer fijo con reproductor alineado a la izquierda */}
        <footer className="fixed bottom-0 left-0 w-20 z-50 bg-[#00FF40] px-4 py-2">
          <div className="flex flex-col items-start">
            <iframe
              src="https://zeno.fm/player/sextafeira-radio"
              width="350"
              height="90"
              frameBorder="0"
              scrolling="no"
              className="mb-1"
            />
            <a
              href="https://zeno.fm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-none underline"
            >
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}


