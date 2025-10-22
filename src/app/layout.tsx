import type { Metadata } from 'next';
import 'normalize.css';

import './globals.css';
import { Halant, Lato } from 'next/font/google';
import { getCriticalAssets } from '../data/preloadConfig';
import Head from 'next/head';
import { AudioPlayerProvider } from '../contexts/AudioPlayerContext';
import { LyricsProvider } from '../contexts/LyricsContext';
import ClientLayout from '../components/ClientLayout/ClientLayout';

const overlock = Halant({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] });

export { lato };

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
        {getCriticalAssets().map((src, index) => {
          // Determine the correct 'as' attribute based on file extension
          let asAttribute = 'image'; // default
          if (src.endsWith('.otf') || src.endsWith('.woff') || src.endsWith('.woff2') || src.endsWith('.ttf')) {
            asAttribute = 'font';
          } else if (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')) {
            asAttribute = 'video';
          } else if (src.endsWith('.mp3') || src.endsWith('.opus') || src.endsWith('.wav')) {
            asAttribute = 'audio';
          }

          return (
            <link
              key={index}
              rel="preload"
              href={src}
              as={asAttribute}
              {...(asAttribute === 'font' && { crossOrigin: 'anonymous' })}
            />
          );
        })}
      </Head>
      <body>
        <AudioPlayerProvider>
          <LyricsProvider>
            <ClientLayout>{children}</ClientLayout>
          </LyricsProvider>
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
