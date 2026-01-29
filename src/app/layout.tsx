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
  preload: true,
});
const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'optional',
  preload: false,
});

export { lato };

export const metadata: Metadata = {
  metadataBase: new URL('https://anastasiia-ramona.netlify.app'),
  title: {
    default: 'ANASTASIIA RAMONA',
    template: '%s | ANASTASIIA RAMONA',
  },
  description: 'Indie musician & singer-songwriter. Indie rock, dream pop, and synth pop exploring themes of self-discovery, overwork, burnout, and sudden sparks of inspiration.',
  keywords: ['Anastasiia Ramona', 'indie music', 'dream pop', 'synth pop', 'indie rock', 'singer-songwriter', 'music', 'indie artist'],
  authors: [{ name: 'Anastasiia Ramona' }],
  creator: 'Anastasiia Ramona',
  publisher: 'Anastasiia Ramona',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anastasiia-ramona.netlify.app',
    siteName: 'ANASTASIIA RAMONA',
    title: 'ANASTASIIA RAMONA - Indie Musician & Singer-Songwriter',
    description: 'Indie musician & singer-songwriter. Indie rock, dream pop, and synth pop exploring themes of self-discovery, overwork, burnout, and sudden sparks of inspiration.',
    images: [
      {
        url: 'https://anastasiia-ramona.netlify.app/assets/musician-1.webp',
        width: 1200,
        height: 630,
        alt: 'Anastasiia Ramona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANASTASIIA RAMONA - Indie Musician & Singer-Songwriter',
    description: 'Indie musician & singer-songwriter. Indie rock, dream pop, and synth pop.',
    images: ['https://anastasiia-ramona.netlify.app/assets/musician-1.webp'],
  },
  verification: {
    yandex: '18436f7da04f12f3',
    google: '_VP7MNXQLWK3loVZk5OQu5WaijMQDKe7s7XDR4g2ixg',
  },
  alternates: {
    canonical: 'https://anastasiia-ramona.netlify.app',
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
      <body className={lato.className}>
        <AudioPlayerProvider>
          <LyricsProvider>
            <ClientLayout>{children}</ClientLayout>
          </LyricsProvider>
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
