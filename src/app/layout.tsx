import type { Metadata } from 'next';
import 'normalize.css';

import './globals.css';
import { Halant } from 'next/font/google';
import StartPage from '../components/StartPage/StartPage';
import { images } from '../data/albums';
import Head from 'next/head';
import { AudioPlayerProvider } from '../contexts/AudioPlayerContext';
import ClientLayout from '../components/ClientLayout/ClientLayout';

const overlock = Halant({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ANASTASIIA RAMONA',
  description: 'Indie-musician/singer-songwriter',
  verification: {
    yandex: '18436f7da04f12f3',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  viewportFit: 'cover',
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
        <AudioPlayerProvider>
          <StartPage>
            <ClientLayout>{children}</ClientLayout>
          </StartPage>
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
