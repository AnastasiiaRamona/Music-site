'use client';

import { motion } from 'framer-motion';
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
      <img
        src="/assets/song-lyrics.svg"
        alt="Lyrics"
        className={styles.icon}
      />
    </motion.button>
  );
}
