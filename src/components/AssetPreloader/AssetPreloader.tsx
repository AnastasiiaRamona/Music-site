'use client';

import { useEffect } from 'react';

interface AssetPreloaderProps {
  images?: string[];
  audios?: string[];
  fonts?: string[];
}

export default function AssetPreloader({ images = [], audios = [], fonts = [] }: AssetPreloaderProps) {
  useEffect(() => {
    const runWhenIdle = (fn: () => void) => {
      if (typeof window === 'undefined') return;
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };

      if (w.requestIdleCallback) {
        const id = w.requestIdleCallback(fn, { timeout: 2000 });
        return () => w.cancelIdleCallback?.(id);
      }

      const t = window.setTimeout(fn, 0);
      return () => window.clearTimeout(t);
    };

    const preloadedAssets = new Set<string>();

    const preloadAsset = (src: string, type: 'image' | 'audio' | 'font') => {
      if (preloadedAssets.has(src)) {
        return Promise.resolve(src);
      }
      preloadedAssets.add(src);

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
          if (src.endsWith('.woff2')) link.type = 'font/woff2';
          else if (src.endsWith('.woff')) link.type = 'font/woff';
          else if (src.endsWith('.otf')) link.type = 'font/otf';
          else if (src.endsWith('.ttf')) link.type = 'font/ttf';
          link.crossOrigin = 'anonymous';
          link.href = src;
          document.head.appendChild(link);
          resolve(src);
        }
      });
    };

    const preloadAssets = async () => {
      const promises: Promise<unknown>[] = [];

      const uniqueImages = Array.from(new Set(images));
      const uniqueAudios = Array.from(new Set(audios));
      const uniqueFonts = Array.from(new Set(fonts));

      uniqueImages.forEach(src => {
        promises.push(preloadAsset(src, 'image'));
      });

      uniqueAudios.forEach(src => {
        promises.push(preloadAsset(src, 'audio'));
      });

      uniqueFonts.forEach(src => {
        promises.push(preloadAsset(src, 'font'));
      });

      await Promise.allSettled(promises);
    };

    const cancel = runWhenIdle(() => {
      void preloadAssets();
    });

    return () => cancel?.();
  }, [images, audios, fonts]);

  return null;
}
