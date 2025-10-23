'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './LyricsPanel.module.css';

interface LyricsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  songId: string;
  songTitle: string;
  lyricsPath?: string;
}

export default function LyricsPanel({ isOpen, onClose, songId, songTitle, lyricsPath }: LyricsPanelProps) {
  const [lyrics, setLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadLyrics = async () => {
      setIsLoading(true);
      try {
        const path = lyricsPath || `/lyrics/${songId}.txt`;
        const response = await fetch(path);
        if (response.ok) {
          const text = await response.text();
          setLyrics(text);
        } else {
          setLyrics('Lyrics not available');
        }
      } catch (error) {
        setLyrics('Error loading lyrics');
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen && (songId || lyricsPath)) {
      loadLyrics();
    }
  }, [isOpen, songId, lyricsPath]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.backdrop}
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className={styles.panel}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>{songTitle}</h3>
              <button className={styles.closeButton} onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            <div className={styles.content}>
              {isLoading ? (
                <div className={styles.loading}>Loading lyrics...</div>
              ) : (
                <div className={styles.lyrics}>
                  {lyrics.split('\n').map((line, index) => (
                    <p key={index} className={styles.line}>
                      {line || '\u00A0'}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
