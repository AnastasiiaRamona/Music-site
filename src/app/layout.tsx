import type { Metadata } from 'next';
import 'normalize.css';

import './globals.css';
import { Halant, Lato } from 'next/font/google';
import { AudioPlayerProvider } from '../contexts/AudioPlayerContext';
import { LyricsProvider } from '../contexts/LyricsContext';
import ClientLayout from '../components/ClientLayout/ClientLayout';

const overlock = Halant({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export { lato };

export const metadata: Metadata = {
  title: 'ANASTASIIA RAMONA',
  description: 'Indie musician & singer-songwriter',
  verification: {
    yandex: '18436f7da04f12f3',
    google: '_VP7MNXQLWK3loVZk5OQu5WaijMQDKe7s7XDR4g2ixg',
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
