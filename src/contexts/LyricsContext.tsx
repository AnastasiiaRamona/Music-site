'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface LyricsContextType {
  isOpen: boolean;
  currentSongId: string | null;
  currentSongTitle: string | null;
  currentLyricsPath: string | null;
  openLyrics: (songId: string, songTitle: string, lyricsPath?: string) => void;
  closeLyrics: () => void;
  toggleLyrics: (songId: string, songTitle: string, lyricsPath?: string) => void;
}

const LyricsContext = createContext<LyricsContextType | undefined>(undefined);

export function LyricsProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [currentSongTitle, setCurrentSongTitle] = useState<string | null>(null);
  const [currentLyricsPath, setCurrentLyricsPath] = useState<string | null>(null);
  const pathname = usePathname();

  // Close lyrics when navigating to different pages, but keep the ability to open them
  useEffect(() => {
    setIsOpen(false);
    // Don't reset currentSongId and currentSongTitle here - keep them for potential reopening
  }, [pathname]);

  const openLyrics = (songId: string, songTitle: string, lyricsPath?: string) => {
    setCurrentSongId(songId);
    setCurrentSongTitle(songTitle);
    setCurrentLyricsPath(lyricsPath || null);
    setIsOpen(true);
  };

  const closeLyrics = () => {
    setIsOpen(false);
    setCurrentSongId(null);
    setCurrentSongTitle(null);
    setCurrentLyricsPath(null);
  };

  const toggleLyrics = (songId: string, songTitle: string, lyricsPath?: string) => {
    if (isOpen && currentSongId === songId) {
      closeLyrics();
    } else {
      openLyrics(songId, songTitle, lyricsPath);
    }
  };

  return (
    <LyricsContext.Provider
      value={{
        isOpen,
        currentSongId,
        currentSongTitle,
        currentLyricsPath,
        openLyrics,
        closeLyrics,
        toggleLyrics,
      }}
    >
      {children}
    </LyricsContext.Provider>
  );
}

export function useLyrics() {
  const context = useContext(LyricsContext);
  if (context === undefined) {
    throw new Error('useLyrics must be used within a LyricsProvider');
  }
  return context;
}
