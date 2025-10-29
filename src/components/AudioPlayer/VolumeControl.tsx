'use client';

import { useState, useEffect } from 'react';
import styles from './VolumeControl.module.css';
import { VolumeIcon, VolumeMutedIcon, VolumeControlUnmute } from '../Icons/Icons';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMute?: (currentVolume?: number, reason?: 'button' | 'slider') => void;
  onUnmuteWithMaxVolume?: () => void;
  isMuted?: boolean;
  isMobile?: boolean;
  muteReason?: 'button' | 'slider' | null;
  onVolumeZero?: () => void;
}

export default function VolumeControl({ volume, onVolumeChange, onToggleMute, onUnmuteWithMaxVolume, isMuted = false, isMobile = false, muteReason, onVolumeZero }: VolumeControlProps) {
  const muteMethod = muteReason;

  useEffect(() => {
    if (volume === 0 && !isMuted && onVolumeZero) {
      onVolumeZero();
    }
  }, [volume, isMuted, onVolumeZero]);

  const handleSliderClick = () => {
    if (isMuted && onToggleMute) {
      onToggleMute();
    }
  };

  const handleIconClick = () => {
    if (isMuted) {
      if (muteMethod === 'slider') {
        if (onUnmuteWithMaxVolume) {
          onUnmuteWithMaxVolume();
        }
      } else {
        if (onToggleMute) {
          onToggleMute();
        }
      }
    } else {
      if (onToggleMute) {
        onToggleMute(volume, 'button');
      }
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <VolumeControlUnmute width={16} height={16} />;
    }
    return <VolumeIcon width={16} height={16} />;
  };

  return (
    <div className={`${styles.volumeControl} ${isMobile ? styles.mobile : ''}`}>
      <button
        className={styles.volumeIconButton}
        onClick={handleIconClick}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {getVolumeIcon()}
      </button>
      <div className={styles.volumeSliderContainer} onClick={handleSliderClick}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={onVolumeChange}
          className={styles.volumeSlider}
        />
      </div>
    </div>
  );
}
