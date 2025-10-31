'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './SkeletonImage.module.css';

interface SkeletonImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  skeletonClassName?: string;
  showSkeleton?: boolean;
}

export default function SkeletonImage({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  showSkeleton = true,
  ...props
}: SkeletonImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {showSkeleton && isLoading && !hasError && (
        <div className={`${styles.skeleton} ${skeletonClassName}`} />
      )}

      <Image
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`${styles.image} ${isLoading ? styles.hidden : styles.visible}`}
        {...props}
      />
    </div>
  );
}
