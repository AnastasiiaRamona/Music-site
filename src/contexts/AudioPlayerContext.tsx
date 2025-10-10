'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Track {
  title: string;
  coverSrc: string;
  audioSrc: string;
  albumId: string;
}

interface AudioPlayerContextType {
  isPlayerVisible: boolean;
  currentTrack: Track | null;
  shouldAutoPlay: boolean;
  isShuffled: boolean;
  showPlayer: (track: Track) => void;
  showPlayerAndPlay: (track: Track) => void;
  hidePlayer: () => void;
  toggleShuffle: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPlayer = (track: Track) => {
    setCurrentTrack(track);
    setIsPlayerVisible(true);
    setShouldAutoPlay(false);
  };

  const showPlayerAndPlay = (track: Track) => {
    setCurrentTrack(track);
    setIsPlayerVisible(true);
    setShouldAutoPlay(true);

    // Create playlist with all tracks that have audioSrc
    const { albums } = require('../data/albums');
    const tracksWithAudio: Track[] = [];

    albums.forEach((album: any) => {
      if (album.isAlbum && album.tracks) {
        // If it's an album, add all its tracks
        album.tracks.forEach((track: any) => {
          tracksWithAudio.push({
            title: track.title,
            coverSrc: track.coverSrc || album.coverSrc,
            audioSrc: track.audioSrc,
            albumId: track.trackId
          });
        });
      } else if (album.audioSrc) {
        // If it's a single track
        tracksWithAudio.push({
          title: album.title,
          coverSrc: album.coverSrc,
          audioSrc: album.audioSrc,
          albumId: album.albumId
        });
      }
    });

    setPlaylist(tracksWithAudio);
    const trackIndex = tracksWithAudio.findIndex((t: Track) => t.albumId === track.albumId);
    setCurrentIndex(trackIndex >= 0 ? trackIndex : 0);
  };

  const hidePlayer = () => {
    setIsPlayerVisible(false);
    setCurrentTrack(null);
    setShouldAutoPlay(false);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const playNextTrack = () => {
    if (playlist.length === 0) return;

    let nextIndex;
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }

    const nextTrack = playlist[nextIndex];
    if (nextTrack) {
      setCurrentTrack(nextTrack);
      setCurrentIndex(nextIndex);
      setShouldAutoPlay(true);
    }
  };

  const playPreviousTrack = () => {
    if (playlist.length === 0) return;

    let prevIndex;
    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * playlist.length);
    } else {
      prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    }

    const prevTrack = playlist[prevIndex];
    if (prevTrack) {
      setCurrentTrack(prevTrack);
      setCurrentIndex(prevIndex);
      setShouldAutoPlay(true);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlayerVisible,
        currentTrack,
        shouldAutoPlay,
        isShuffled,
        showPlayer,
        showPlayerAndPlay,
        hidePlayer,
        toggleShuffle,
        playNextTrack,
        playPreviousTrack,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
}
