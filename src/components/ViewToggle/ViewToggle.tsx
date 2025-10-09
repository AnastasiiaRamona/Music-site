'use client';

import styles from './ViewToggle.module.css';

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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
        </svg>
        Gallery
      </button>
      <button
        className={`${styles.toggleButton} ${currentView === 'list' ? styles.active : ''}`}
        onClick={() => onViewChange('list')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
        </svg>
        List
      </button>
    </div>
  );
}
