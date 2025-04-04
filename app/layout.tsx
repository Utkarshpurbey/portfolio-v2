import type { Metadata } from "next";
import "./globals.css";
import MyHeader from "./components/MyHeader";
import { Providers } from "./components/Provider";
import MyFooter from "./components/MyFooter";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Utkarsh's Areana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="h-screen flex items-center justify-center p-6 select-none">
            <div className="bg-[#011627] relative  w-full h-full   rounded-md border-[#1e2d3d] border">
              <MyHeader />
              {children}
              <div className=" w-full  absolute bottom-0 ">
                <MyFooter />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
