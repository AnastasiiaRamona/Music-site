import type { Metadata } from "next";

import "./globals.css";
import { Overlock_SC } from "next/font/google";
import StartPage from "./startPage/StartPage";
import { images } from "../app/data/albums";
import Head from "next/head";

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
      <Head>
        {images.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>
      <body>
        <StartPage>
          {children}
        </StartPage>
      </body>
    </html>
  );
}
