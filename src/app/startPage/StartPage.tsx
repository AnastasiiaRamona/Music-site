'use client';

import { useRef } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function StartPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef<HTMLElement>(null);
  return (
    <>
      <Header footerRef={ref} />
      <main>{children}</main>
      <Footer ref={ref} />
    </>
  );
}