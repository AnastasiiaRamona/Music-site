'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { albums } from '../data/albums';
import { covers } from '../data/covers';

interface Track {
  title: string;
  coverSrc: string;
  audioSrc: string;
  albumId: string;
  parentAlbumId?: string;
  lyricsPath?: string;
  isCover?: boolean;
  instrumental?: boolean;
  spotifyLink?: string;
  appleMusicLink?: string;
  youtubeLink?: string;
  amazonLink?: string;
}

interface AudioPlayerContextType {
  isPlayerVisible: boolean;
  currentTrack: Track | null;
  shouldAutoPlay: boolean;
  isShuffled: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  muteReason: 'button' | 'slider' | null;
  showPlayer: (track: Track) => void;
  showPlayerAndPlay: (track: Track) => void;
  hidePlayer: () => void;
  toggleShuffle: () => void;
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  toggleMute: (currentVolume?: number, reason?: 'button' | 'slider') => void;
  unmute: () => number;
  unmuteWithMaxVolume: () => void;
  setVolume: (volume: number) => void;
  setAudioElement: (audio: HTMLAudioElement | null) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMuted = localStorage.getItem('audioPlayerMuted');
      return savedMuted ? JSON.parse(savedMuted) : false;
    }
    return false;
  });
  const [volume, setVolume] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('audioPlayerVolume');
      return savedVolume ? parseFloat(savedVolume) : 1;
    }
    return 1;
  });
  const [previousVolume, setPreviousVolume] = useState(1);
  const [muteReason, setMuteReason] = useState<'button' | 'slider' | null>(null);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [playedTracks, setPlayedTracks] = useState<Set<string>>(new Set());

  // Apply muted state and volume to audio element when they change
  useEffect(() => {
    if (audioElement) {
      audioElement.muted = isMuted;
      audioElement.volume = volume;
    }
  }, [audioElement, isMuted, volume]);

  const showPlayer = (track: Track) => {
    setCurrentTrack(track);
    setIsPlayerVisible(true);
    setShouldAutoPlay(false);
  };

  const showPlayerAndPlay = (track: Track) => {
    const isCoverTrack = covers.some((cover: any) => cover.id === track.albumId);

    setCurrentTrack({
      ...track,
      isCover: isCoverTrack
    });

    setIsPlayerVisible(true);
    setShouldAutoPlay(true);
    setIsPlaying(true);

    const tracksWithAudio: Track[] = [];

    if (isCoverTrack) {
      covers.forEach((cover: any) => {
        tracksWithAudio.push({
          title: cover.title,
          coverSrc: cover.coverSrc,
          audioSrc: cover.audioSrc,
          albumId: cover.id,
          isCover: true,
        });
      });
    } else {
      let sourceAlbum;
      if (track.parentAlbumId) {
        sourceAlbum = albums.find((album: any) => album.albumId === track.parentAlbumId);
      } else {
        sourceAlbum = albums.find((album: any) => {
          if (album.isAlbum && album.tracks) {
            return album.tracks.some((albumTrack: any) => albumTrack.trackId === track.albumId);
          }
          return album.albumId === track.albumId;
        });
      }

      if (sourceAlbum && sourceAlbum.isAlbum && sourceAlbum.tracks) {
        sourceAlbum.tracks.forEach((albumTrack: any) => {
          tracksWithAudio.push({
            title: albumTrack.title,
            coverSrc: albumTrack.coverSrc || sourceAlbum.coverSrc,
            audioSrc: albumTrack.audioSrc,
            albumId: albumTrack.trackId,
            isCover: false,
            instrumental: albumTrack.instrumental,
            spotifyLink: sourceAlbum.spotifyLink,
            appleMusicLink: sourceAlbum.appleMusicLink,
            youtubeLink: sourceAlbum.youtubeLink,
            amazonLink: sourceAlbum.amazonLink
          });
        });
      } else {
        covers.forEach((cover: any) => {
          tracksWithAudio.push({
            title: cover.title,
            coverSrc: cover.coverSrc,
            audioSrc: cover.audioSrc,
            albumId: cover.id,
            isCover: true,
          });
        });

        albums.forEach((album: any) => {
          if (album.isAlbum && album.tracks) {
            album.tracks.forEach((albumTrack: any) => {
              tracksWithAudio.push({
                title: albumTrack.title,
                coverSrc: albumTrack.coverSrc || album.coverSrc,
                audioSrc: albumTrack.audioSrc,
                albumId: albumTrack.trackId,
                isCover: false,
                instrumental: albumTrack.instrumental,
                spotifyLink: album.spotifyLink,
                appleMusicLink: album.appleMusicLink,
                youtubeLink: album.youtubeLink,
                amazonLink: album.amazonLink
              });
            });
          } else if (album.audioSrc) {
            tracksWithAudio.push({
              title: album.title,
              coverSrc: album.coverSrc,
              audioSrc: album.audioSrc,
              albumId: album.albumId,
              isCover: false,
              instrumental: album.instrumental,
              lyricsPath: album.lyricsPath,
              spotifyLink: album.spotifyLink,
              appleMusicLink: album.appleMusicLink,
              youtubeLink: album.youtubeLink,
              amazonLink: album.amazonLink
            });
          }
        });
      }
    }

    setPlaylist(tracksWithAudio);
    const trackIndex = tracksWithAudio.findIndex((t: Track) => t.albumId === track.albumId);
    setCurrentIndex(trackIndex >= 0 ? trackIndex : 0);
    setPlayedTracks(new Set());
    if (isShuffled && track.albumId) {
      setPlayedTracks(prev => new Set([...Array.from(prev), track.albumId]));
    }
  };

  const hidePlayer = () => {
    setIsPlayerVisible(false);
    setCurrentTrack(null);
    setShouldAutoPlay(false);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
    if (isShuffled) {
      setPlayedTracks(new Set());
    }
  };

  const togglePlayPause = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const setAudioElementRef = (audio: HTMLAudioElement | null) => {
    setAudioElement(audio);
  };

  const getNextShuffledTrack = (currentTrackId: string): number => {
    const availableTracks = playlist.filter(track => track.albumId !== currentTrackId);

    if (availableTracks.length === 0) {
      setPlayedTracks(new Set());
      const randomIndex = Math.floor(Math.random() * playlist.length);
      return randomIndex;
    }

    const randomTrack = availableTracks[Math.floor(Math.random() * availableTracks.length)];
    const trackIndex = playlist.findIndex(track => track.albumId === randomTrack.albumId);

    setPlayedTracks(prev => new Set([...Array.from(prev), randomTrack.albumId]));

    return trackIndex;
  };

  const playNextTrack = () => {
    if (playlist.length === 0) return;

    let nextIndex;
    if (isShuffled) {
      nextIndex = getNextShuffledTrack(currentTrack?.albumId || '');
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
      prevIndex = getNextShuffledTrack(currentTrack?.albumId || '');
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

  const toggleMute = (currentVolume?: number, reason: 'button' | 'slider' = 'button') => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (newMutedState) {
      if (currentVolume !== undefined) {
        setPreviousVolume(currentVolume);
      }
      setMuteReason(reason);
    } else {
      setMuteReason(null);
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('audioPlayerMuted', JSON.stringify(newMutedState));
    }
  };

  const unmute = () => {
    setIsMuted(false);
    setMuteReason(null);
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioPlayerMuted', JSON.stringify(false));
    }
    // Return the previous volume for restoration
    return previousVolume;
  };

  const unmuteWithMaxVolume = () => {
    setIsMuted(false);
    setMuteReason(null);
    setVolume(1);
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioPlayerMuted', JSON.stringify(false));
      localStorage.setItem('audioPlayerVolume', '1');
    }
  };

  const handleSetVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioPlayerVolume', newVolume.toString());
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlayerVisible,
        currentTrack,
        shouldAutoPlay,
        isShuffled,
        isPlaying,
        isMuted,
        volume,
        muteReason,
        showPlayer,
        showPlayerAndPlay,
        hidePlayer,
        toggleShuffle,
        togglePlayPause,
        playNextTrack,
        playPreviousTrack,
        toggleMute,
        unmute,
        unmuteWithMaxVolume,
        setVolume: handleSetVolume,
        setAudioElement: setAudioElementRef,
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
