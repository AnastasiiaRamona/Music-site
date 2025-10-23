'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LyricsButton.module.css';

interface LyricsButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export default function LyricsButton({ onClick, isActive }: LyricsButtonProps) {
  return (
    <motion.button
      className={`${styles.lyricsButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      title="Toggle Lyrics"
    >
      <Image
        src="/assets/song-lyrics.svg"
        alt="Lyrics"
        width={20}
        height={20}
        className={styles.icon}
      />
    </motion.button>
  );
}
