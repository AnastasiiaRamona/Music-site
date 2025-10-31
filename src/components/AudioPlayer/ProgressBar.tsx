'use client';

import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMobile?: boolean;
}

export default function ProgressBar({ currentTime, duration, onSeek, isMobile = false }: ProgressBarProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`${styles.timeInfo} ${isMobile ? styles.mobile : ''}`}>
      <span className={styles.time}>{formatTime(currentTime)}</span>
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={onSeek}
        className={styles.progressBar}
        style={{
          '--progress': duration > 0 ? `${(currentTime / duration) * 100}%` : '0%'
        } as React.CSSProperties}
      />
      <span className={styles.time}>{formatTime(duration)}</span>
    </div>
  );
}
