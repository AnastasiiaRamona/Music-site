'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

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

  const text = "Indie Dream Crafter";

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
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.08,
              }}
            >
              {char}
            </motion.span>
          ))}
        </h2>
        <div className={`${styles.layer} ${styles['layer-base']}`}></div>
        <div className={`${styles.layer} ${styles['layer-table']}`}></div>
        <div className={`${styles.layer} ${styles['layer-bottom']}`}></div>
      </div>
    </section>

    <section className={styles['navigation-section']}>
      <nav className={styles['site-navigation']}>
        <ul>
          <li><a href="#music">Music</a></li>
          <li><a href="#covers">Covers</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </section>

    <section className={styles['new-release-section']}>
      <div className={styles['layers']}>
        <div className={`${styles.layer} ${styles['layer-top']}`}></div>
        <div className={`${styles.layer} ${styles['layer-waves']}`}></div>
      </div>
    </section>
  </>
}