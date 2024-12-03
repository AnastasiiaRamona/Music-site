'use client';

import React, { RefObject, memo, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './page.module.css';
import { Vibes } from 'next/font/google';

const vibes = Vibes({ weight: '400', subsets: ['latin'] });

type IframeProps = {
  src: string;
};

const MemoizedIframe = memo(({ src }: IframeProps) => {
  return (
    <iframe
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      rel="preload"
    ></iframe>
  );
});

MemoizedIframe.displayName = 'MemoizedIframe';

function scrollToSection(ref: RefObject<HTMLElement>) {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
}

const Home = () => {
  const newReleaseSectionRef = useRef<HTMLElement>(null);

  const latestReleaseSrc = useMemo(
    () => 'https://www.youtube.com/embed/KgRRJNzONHU?si=nwoKgWhdGIVVVu4_',
    []
  );

  const welcomeText = useMemo(
    () => "Welcome to Anastasiia Ramona's Music World",
    []
  );

  const heroDescription = useMemo(
    () => "Explore Anastasiia Ramona's music and find out more about our journey.",
    []
  );

  const latestReleaseDescription = useMemo(
    () => "Check out Anastasiia Ramona's latest release and get a taste of her new sound.",
    []
  );

  useEffect(() => {
    const CustomToast = () => (
      <div
        onClick={() => {
          scrollToSection(newReleaseSectionRef);
        }}
        className={styles['custom-toast']}
      >
        Listen to the latest release!
      </div>
    );

    toast(<CustomToast />, {
      position: 'bottom-left',
      autoClose: 5000,
    });
  }, []);

  return (
    <section className={styles['site-main']}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <h2>{welcomeText}</h2>
          <p>{heroDescription}</p>
          <button className={styles['cta-button']}>
            <Link legacyBehavior href="/music" rel="preload">
              Learn More
            </Link>
          </button>
        </div>
      </section>
      <section ref={newReleaseSectionRef} className={styles['new-release-section']}>
        <h2 className={vibes.className}>THE LATEST RELEASE</h2>
        <div className={styles['new-release-content']}>
          <MemoizedIframe src={latestReleaseSrc} />
          <p>{latestReleaseDescription}</p>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

export default Home;

