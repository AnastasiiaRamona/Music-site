'use client';

import Image from 'next/image';
import styles from './TrackInfo.module.css';

interface TrackInfoProps {
  title: string;
  coverSrc: string;
  isMobile?: boolean;
}

export default function TrackInfo({ title, coverSrc, isMobile = false }: TrackInfoProps) {
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
        <div className={styles.trackTitle}>{title}</div>
        <div className={styles.trackArtist}>Anastasiia Ramona</div>
      </div>
    </div>
  );
}
