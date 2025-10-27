'use client';

import styles from './VolumeControl.module.css';
import { VolumeIcon, VolumeMutedIcon } from '../Icons/Icons';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMute?: () => void;
  isMuted?: boolean;
  isMobile?: boolean;
}

export default function VolumeControl({ volume, onVolumeChange, onToggleMute, isMuted = false, isMobile = false }: VolumeControlProps) {
  const handleSliderClick = () => {
    if (isMuted && onToggleMute) {
      onToggleMute();
    }
  };

  return (
    <div className={`${styles.volumeControl} ${isMobile ? styles.mobile : ''}`}>
      <button
        className={styles.volumeIconButton}
        onClick={onToggleMute}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeMutedIcon width={16} height={16} />
        ) : (
          <VolumeIcon width={16} height={16} />
        )}
      </button>
      <div className={styles.volumeSliderContainer} onClick={handleSliderClick}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={onVolumeChange}
          disabled={isMuted}
          className={styles.volumeSlider}
        />
      </div>
    </div>
  );
}
