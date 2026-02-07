'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './AudioPlayer.module.css';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import { useLyrics } from '../../contexts/LyricsContext';
import SocialLinks from '../SocialLinks/SocialLinks';
import TrackInfo from './TrackInfo';
import PlaybackControls from './PlaybackControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import MobilePlayer from './MobilePlayer';
import { MinusIcon, PlusIcon, CloseIconLarge } from '../Icons/Icons';
import { useAudioLoadRetry } from './useAudioLoadRetry';

interface AudioPlayerProps {
  isVisible: boolean;
  currentTrack: {
    title: string;
    coverSrc: string;
    audioSrc: string;
    albumId: string;
    lyricsPath?: string;
    isCover?: boolean;
    instrumental?: boolean;
    spotifyLink?: string;
    appleMusicLink?: string;
    youtubeLink?: string;
    amazonLink?: string;
  } | null;
  shouldAutoPlay?: boolean;
  onClose: () => void;
}

export default function AudioPlayer({ isVisible, currentTrack, shouldAutoPlay = false, onClose }: AudioPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSocialLinksExpanded, setIsSocialLinksExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMediumView, setIsMediumView] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isShuffled, toggleShuffle, playNextTrack, playPreviousTrack, isPlaying, togglePlayPause, isMuted, toggleMute, unmute, unmuteWithMaxVolume, volume, setVolume, muteReason, setAudioElement } = useAudioPlayer();
  const { isOpen, toggleLyrics } = useLyrics();

  useEffect(() => {
    setAudioElement(audioRef.current);
  }, [setAudioElement]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isMobile = width <= 919;
      const isMedium = width > 919 && width <= 1309;

      setIsMobileView(isMobile);
      setIsMediumView(isMedium);

      if (!isMobile) {
        setIsMobileExpanded(false);
      }
      if (!isMedium) {
        setIsSocialLinksExpanded(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handlePlay = () => {
        if (!isPlaying) {
          togglePlayPause();
        }
      };
      const handlePause = () => {
        if (isPlaying) {
          togglePlayPause();
        }
      };
      const handleEnded = () => {
        playNextTrack();
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [playNextTrack, isPlaying, togglePlayPause]);



  const toggleSocialLinks = useCallback(() => {
    setIsSocialLinksExpanded(!isSocialLinksExpanded);
  }, [isSocialLinksExpanded]);

  const closeSocialLinks = useCallback(() => {
    setIsSocialLinksExpanded(false);
  }, []);

  const toggleMobileExpanded = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMobileExpanded(!isMobileExpanded);
  }, [isMobileExpanded]);

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

    if (newVolume > 0 && isMuted) {
      const restoredVolume = unmute();
      setVolume(restoredVolume);
    }

    setVolume(newVolume);
  };

  const handleUnmuteWithMaxVolume = () => {
    unmuteWithMaxVolume();
  };

  const handleVolumeZero = () => {
    toggleMute(volume, 'slider');
  };

  useEffect(() => {
    if (currentTrack) {
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentTrack]);

  useAudioLoadRetry(audioRef, currentTrack);

  useEffect(() => {
    if (shouldAutoPlay && audioRef.current && currentTrack) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
        } catch (error) {
          console.log('Autoplay was prevented:', error);
        }
      };
      playAudio();
    }
  }, [shouldAutoPlay, currentTrack]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isVisible) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
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
  }, [isVisible, togglePlayPause, seekBackward, seekForward, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isSocialLinksExpanded) {
        const target = e.target as Element;
        if (!target.closest(`.${styles.socialLinksContainer}`)) {
          closeSocialLinks();
        }
      }
    };

    if (isSocialLinksExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSocialLinksExpanded, closeSocialLinks]);

  if (!isVisible || !currentTrack) return null;

  return (
    <div className={`${styles.playerContainer} ${isMobileView && isMobileExpanded ? styles.mobileExpandedContainer : ''}`}>
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        preload="metadata"
      />

      {isMobileView ? (
        <MobilePlayer
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          isShuffled={isShuffled}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          isExpanded={isMobileExpanded}
          onTogglePlay={togglePlayPause}
          onToggleShuffle={toggleShuffle}
          onPreviousTrack={playPreviousTrack}
          onNextTrack={playNextTrack}
          onSeekBackward={seekBackward}
          onSeekForward={seekForward}
          onSeek={handleSeek}
          onVolumeChange={handleVolumeChange}
          onToggleMute={(currentVolume, reason) => toggleMute(currentVolume, reason)}
          onUnmuteWithMaxVolume={handleUnmuteWithMaxVolume}
          isMuted={isMuted}
          muteReason={muteReason}
          onVolumeZero={handleVolumeZero}
          onToggleExpanded={toggleMobileExpanded}
          onClose={onClose}
          onToggleLyrics={() => currentTrack && toggleLyrics(currentTrack.albumId, currentTrack.title, currentTrack.lyricsPath)}
          isLyricsActive={isOpen}
        />
      ) : (
        <div className={styles.playerContent}>
          <TrackInfo
            title={currentTrack.title}
            coverSrc={currentTrack.coverSrc}
          />

          <div className={styles.controls}>
            <PlaybackControls
              isPlaying={isPlaying}
              isShuffled={isShuffled}
              onTogglePlay={togglePlayPause}
              onToggleShuffle={toggleShuffle}
              onPreviousTrack={playPreviousTrack}
              onNextTrack={playNextTrack}
              onSeekBackward={seekBackward}
              onSeekForward={seekForward}
              onToggleLyrics={() => currentTrack && toggleLyrics(currentTrack.albumId, currentTrack.title, currentTrack.lyricsPath)}
              isLyricsActive={isOpen}
              isInstrumental={currentTrack.instrumental}
              isCover={currentTrack.isCover}
            />

            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={handleSeek}
            />
          </div>

          <VolumeControl
            volume={volume}
            onVolumeChange={handleVolumeChange}
            onToggleMute={(currentVolume, reason) => toggleMute(currentVolume, reason)}
            onUnmuteWithMaxVolume={handleUnmuteWithMaxVolume}
            isMuted={isMuted}
            muteReason={muteReason}
            onVolumeZero={handleVolumeZero}
          />

          {(currentTrack.spotifyLink || currentTrack.appleMusicLink || currentTrack.youtubeLink || currentTrack.amazonLink) && (
            <>
              {isMobileView ? (
                <div className={styles.socialLinksContainer}>
                  <button
                    className={styles.socialLinksToggle}
                    onClick={toggleSocialLinks}
                    title={isSocialLinksExpanded ? "Hide social links" : "Show social links"}
                  >
                    {isSocialLinksExpanded ? (
                      <MinusIcon width={16} height={16} />
                    ) : (
                      <PlusIcon width={16} height={16} />
                    )}
                  </button>
                  <div className={`${styles.socialLinksWrapper} ${isSocialLinksExpanded ? styles.expanded : ''}`}>
                    <SocialLinks
                      spotifyLink={currentTrack.spotifyLink}
                      appleMusicLink={currentTrack.appleMusicLink}
                      youtubeLink={currentTrack.youtubeLink}
                      amazonLink={currentTrack.amazonLink}
                    />
                  </div>
                </div>
              ) : isMediumView ? (
                <div className={styles.socialLinksContainer}>
                  <button
                    className={styles.socialLinksToggle}
                    onClick={toggleSocialLinks}
                    title={isSocialLinksExpanded ? "Hide social links" : "Show social links"}
                  >
                    {isSocialLinksExpanded ? (
                      <MinusIcon width={16} height={16} />
                    ) : (
                      <PlusIcon width={16} height={16} />
                    )}
                  </button>
                  <div className={`${styles.socialLinksWrapper} ${isSocialLinksExpanded ? styles.expanded : ''}`}>
                    <SocialLinks
                      spotifyLink={currentTrack.spotifyLink}
                      appleMusicLink={currentTrack.appleMusicLink}
                      youtubeLink={currentTrack.youtubeLink}
                      amazonLink={currentTrack.amazonLink}
                    />
                  </div>
                </div>
              ) : (
                <SocialLinks
                  spotifyLink={currentTrack.spotifyLink}
                  appleMusicLink={currentTrack.appleMusicLink}
                  youtubeLink={currentTrack.youtubeLink}
                  amazonLink={currentTrack.amazonLink}
                />
              )}
            </>
          )}

          <button className={styles.closeBtn} onClick={onClose}>
            <CloseIconLarge width={16} height={16} />
          </button>
        </div>
      )}
    </div>
  );
}