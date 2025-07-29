'use client';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { useRef } from 'react';
export default function StartPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef<HTMLElement>(null);
  return (
    <>
      {/* <Header footerRef={ref} /> */}
      <main>{children}</main>
      {/* <Footer ref={ref} /> */}
    </>
  );
}
