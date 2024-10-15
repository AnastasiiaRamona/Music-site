import type { Metadata } from "next";

import "./globals.css";
import { Halant } from "next/font/google";
import StartPage from "../components/StartPage/StartPage";
import { images } from "../data/albums";
import Head from "next/head";

const overlock = Halant({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ANASTASIIA RAMONA",
  description: "Indie-musician/singer-songwriter",
  viewport: "width=device-width, initial-scale=1.0",
  verification: {
    yandex: "18436f7da04f12f3",
  },
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
          <link key={index} rel="preload" href={src.toString()} as="image" />
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
