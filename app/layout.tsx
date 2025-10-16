import type { Metadata } from "next";
import "./globals.css";
import MyHeader from "./components/MyHeader";
import { Providers } from "./components/Provider";
import { Inconsolata } from "next/font/google";
import FooterWrapper from "./components/FooterWrapper";
import ResolutionListener from "./utils/ResolutionListener";

const inter = Inconsolata({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Utkarsh's Areana",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ResolutionListener />
          <div className="h-screen flex items-center justify-center p-6 select-none animate-fadeInIDE">
            <div className="bg-[#011627] relative w-full h-full rounded-md border-borderColor border-2 animate-smoothTransition">
              <MyHeader />
              <div className="animate-fadeInIDE">
                {children}
              </div>
              <FooterWrapper />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
