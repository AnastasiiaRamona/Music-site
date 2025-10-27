'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TrackInfo.module.css';

interface TrackInfoProps {
  title: string;
  coverSrc: string;
  isMobile?: boolean;
}

export default function TrackInfo({ title, coverSrc, isMobile = false }: TrackInfoProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        setShouldAnimate(textWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [title]);

  return (
    <div className={`${styles.trackInfo} ${isMobile ? styles.mobile : ''}`}>
      {coverSrc && (
        <div className={styles.albumCover}>
          <Image
            src={coverSrc}
            alt={title}
            width={isMobile ? 40 : 56}
            height={isMobile ? 40 : 56}
            unoptimized={true}
          />
        </div>
      )}
      <div className={styles.trackDetails}>
        <div ref={containerRef} className={styles.trackTitle}>
          <span
            ref={textRef}
            className={`${styles.trackTitleText} ${shouldAnimate ? styles.animate : ''}`}
          >
            {title}
          </span>
        </div>
        <div className={styles.trackArtist}>Anastasiia Ramona</div>
      </div>
    </div>
  );
}
