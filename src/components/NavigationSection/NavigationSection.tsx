'use client';

import type React from 'react';
import Link from 'next/link';
import styles from './NavigationSection.module.css';

type NavigationSectionProps = {
  onContactClick?: (e: React.MouseEvent) => void;
  isContactPopupOpen?: boolean;
};

export default function NavigationSection({ onContactClick, isContactPopupOpen = false }: NavigationSectionProps) {
  return <section className={styles['navigation-section']}>
    <nav className={styles['site-navigation']}>
      <ul>
        <li><Link href="/music">
          Music</Link></li>
        <li><Link href="/covers">
          Covers</Link></li>
        <li><Link href="/about">
          About</Link></li>
        <li>
          {onContactClick ? (
            <span
              onClick={isContactPopupOpen ? undefined : onContactClick}
              style={{
                cursor: isContactPopupOpen ? 'not-allowed' : 'pointer',
                opacity: isContactPopupOpen ? 0.5 : 1,
                pointerEvents: isContactPopupOpen ? 'none' : 'auto'
              }}
            >
              Contact
            </span>
          ) : (
            <Link href="/contact">
              Contact
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </section>
}