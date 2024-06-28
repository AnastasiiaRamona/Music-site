import type { Metadata } from "next";
import { Overlock_SC } from "next/font/google";

import "./globals.css";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

const overlock = Overlock_SC({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ANASTASIIA RAMONA",
  description: "Musician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${overlock.className}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
