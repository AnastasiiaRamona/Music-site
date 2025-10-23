'use client';

import { useEffect } from 'react';
import styles from './HeroSection.module.css';
import BackButton from '../BackButton/BackButton';

function HeroSection() {
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

  return (
    <header className={styles.header}>
      <video autoPlay loop muted playsInline
        className={styles.video}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className={`${styles.layer} ${styles['layer-bottom']}`}></div>
      <BackButton href="/" />
    </header>
  );
}

export default HeroSection;