'use client';

import { useEffect } from 'react';

interface AssetPreloaderProps {
  images?: string[];
  audios?: string[];
  fonts?: string[];
}

export default function AssetPreloader({ images = [], audios = [], fonts = [] }: AssetPreloaderProps) {
  useEffect(() => {
    const preloadAsset = (src: string, type: 'image' | 'audio' | 'font') => {
      return new Promise((resolve, reject) => {
        if (type === 'image') {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => reject(src);
          img.src = src;
        } else if (type === 'audio') {
          const audio = new Audio();
          audio.oncanplaythrough = () => resolve(src);
          audio.onerror = () => reject(src);
          audio.preload = 'metadata';
          audio.src = src;
        } else if (type === 'font') {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'font';
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
          link.href = src;
          document.head.appendChild(link);
          resolve(src);
        }
      });
    };

    const preloadAssets = async () => {
      const promises: Promise<any>[] = [];

      images.forEach(src => {
        promises.push(preloadAsset(src, 'image'));
      });

      audios.forEach(src => {
        promises.push(preloadAsset(src, 'audio'));
      });

      fonts.forEach(src => {
        promises.push(preloadAsset(src, 'font'));
      });

      try {
        await Promise.allSettled(promises);
        console.log('Assets preloaded successfully');
      } catch (error) {
        console.warn('Some assets failed to preload:', error);
      }
    };

    preloadAssets();
  }, [images, audios, fonts]);

  return null;
}
