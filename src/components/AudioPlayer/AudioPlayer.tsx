'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './AudioPlayer.module.css';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';

interface AudioPlayerProps {
  isVisible: boolean;
  currentTrack: {
    title: string;
    coverSrc: string;
    audioSrc: string;
  } | null;
  shouldAutoPlay?: boolean;
  onClose: () => void;
}

export default function AudioPlayer({ isVisible, currentTrack, shouldAutoPlay = false, onClose }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isShuffled, toggleShuffle, playNextTrack, playPreviousTrack } = useAudioPlayer();

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => {
        setIsPlaying(false);
        // Auto-play next track when current track ends
        playNextTrack();
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [playNextTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const seekBackward = useCallback(() => {
    if (audioRef.current) {
      const newTime = Math.max(0, currentTime - 10);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, [currentTime]);

  const seekForward = useCallback(() => {
    if (audioRef.current) {
      const newTime = Math.min(duration, currentTime + 10);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, [currentTime, duration]);


  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Auto-play effect
  useEffect(() => {
    if (shouldAutoPlay && audioRef.current && currentTrack) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay was prevented:', error);
        }
      };
      playAudio();
    }
  }, [shouldAutoPlay, currentTrack]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isVisible) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          seekBackward();
          break;
        case 'ArrowRight':
          e.preventDefault();
          seekForward();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, togglePlay, seekBackward, seekForward, onClose]);

  if (!isVisible || !currentTrack) return null;

  return (
    <div className={styles.playerContainer}>
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        preload="metadata"
      />

      <div className={styles.playerContent}>
        {/* Track Info */}
        <div className={styles.trackInfo}>
          <div className={styles.albumCover}>
            <Image
              src={currentTrack.coverSrc}
              alt={currentTrack.title}
              width={56}
              height={56}
              unoptimized={true}
            />
          </div>
          <div className={styles.trackDetails}>
            <div className={styles.trackTitle}>{currentTrack.title}</div>
            <div className={styles.trackArtist}>Anastasiia Ramona</div>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.playbackControls}>
            <button
              className={`${styles.controlBtn} ${isShuffled ? styles.active : ''}`}
              onClick={toggleShuffle}
              title="Shuffle"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.949l-1.018 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.744 5.277l-.979.93-2.483-2.481A2.25 2.25 0 00.39 3.5z" />
              </svg>
            </button>

            <button className={styles.seekBtn} onClick={playPreviousTrack} title="Previous Track">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6V6zm8.5 6l8.5 6V6l-8.5 6z" />
              </svg>
            </button>

            <button className={styles.seekBtn} onClick={seekBackward} title="Seek Backward 10s">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
              </svg>
            </button>

            <button className={styles.playBtn} onClick={togglePlay}>
              {isPlaying ? (
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button className={styles.seekBtn} onClick={seekForward} title="Seek Forward 10s">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M13 6v12l8.5-6L13 6zM4 18l8.5-6L4 6v12z" />
              </svg>
            </button>

            <button className={styles.seekBtn} onClick={playNextTrack} title="Next Track">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          <div className={styles.timeInfo}>
            <span className={styles.time}>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className={styles.progressBar}
              style={{
                '--progress': duration > 0 ? `${(currentTime / duration) * 100}%` : '0%'
              } as React.CSSProperties}
            />
            <span className={styles.time}>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className={styles.volumeControl}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.383 3.076A1 1 0 0 1 10 4v8a1 1 0 0 1-1.617.793L5.5 10.5H2a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h3.5l2.883-2.293a1 1 0 0 1 1.617.793z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
        </div>

        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );
}