'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import LatestRelease from '@/components/LatestRelease/LatestRelease';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import NavigationSection from '@/components/NavigationSection/NavigationSection';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.body.style.setProperty('--scrollTop', `${scrollY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const description = "Indie Dream Crafter";
  const latestReleaseText = "Grab the Latest Release";

  return <>
    <section>
      <div className={styles['layers']}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        >
          Anastasiia Ramona
        </motion.h1>
        <h2>
          <AnimatedText text={description} />
        </h2>
        <div className={`${styles.layer} ${styles['layer-base']}`}></div>
        <div className={`${styles.layer} ${styles['layer-table']}`}></div>
        <div className={`${styles.layer} ${styles['layer-bottom']}`}></div>
      </div>
    </section>

    <NavigationSection />

    <section className={styles['new-release-section']}>
      <div className={styles['layers']}>
        <h3><AnimatedText text={latestReleaseText} /></h3>
        <div className={`${styles.layer} ${styles['layer-top']}`}></div>
        <div className={`${styles.layer} ${styles['layer-waves']}`}></div>
        <LatestRelease />
        <article className={styles['new-release-additional-text']}>
          <p>Close your eyes, you&apos;re already here <br />
            Nothing here is real, but it all feels familiar </p>
        </article>
      </div>
    </section>
  </>
}