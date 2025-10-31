'use client';

import styles from './ViewToggle.module.css';
import { GalleryIcon, ListIcon } from '../Icons/Icons';

interface ViewToggleProps {
  currentView: 'gallery' | 'list';
  onViewChange: (view: 'gallery' | 'list') => void;
}

export default function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${currentView === 'gallery' ? styles.active : ''}`}
        onClick={() => onViewChange('gallery')}
      >
        <GalleryIcon width={20} height={20} />
        Gallery
      </button>
      <button
        className={`${styles.toggleButton} ${currentView === 'list' ? styles.active : ''}`}
        onClick={() => onViewChange('list')}
      >
        <ListIcon width={20} height={20} />
        List
      </button>
    </div>
  );
}
