'use client';

import styles from './VolumeControl.module.css';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMobile?: boolean;
}

export default function VolumeControl({ volume, onVolumeChange, isMobile = false }: VolumeControlProps) {
  return (
    <div className={`${styles.volumeControl} ${isMobile ? styles.mobile : ''}`}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path d="M9.383 3.076A1 1 0 0 1 10 4v8a1 1 0 0 1-1.617.793L5.5 10.5H2a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h3.5l2.883-2.293a1 1 0 0 1 1.617.793z" />
      </svg>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        className={styles.volumeSlider}
      />
    </div>
  );
}
