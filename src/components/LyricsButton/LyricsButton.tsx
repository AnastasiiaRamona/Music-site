'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LyricsButton.module.css';
import { SongLyricsIcon } from '../Icons/Icons';

interface LyricsButtonProps {
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
}

export default function LyricsButton({ onClick, isActive, disabled = false }: LyricsButtonProps) {
  return (
    <motion.button
      className={`${styles.lyricsButton} ${isActive ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      title={disabled ? "Lyrics not available" : "Toggle Lyrics"}
    >
      <Image
        src={SongLyricsIcon}
        alt="Lyrics"
        width={20}
        height={20}
        className={`${styles.icon} ${disabled ? styles.disabledIcon : ''}`}
      />
    </motion.button>
  );
}
