'use client';

import instagramIconSrc from '../../assets/instagram-icon.webp';
import telegramIconSrc from '../../assets/telegram-icon.webp';
import youtubeIconSrc from '../../assets/youtube-icon.webp';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import styles from './Footer.module.css';
import { forwardRef } from 'react';

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className={styles['site-footer']}>
      <div className={styles['footer-content']}>
        <div className={styles['social-list']}>
          <SocialMediaButton href='https://www.instagram.com/sia.de.ramona/' url={instagramIconSrc} alt="Instagram" />
          <SocialMediaButton href='https://t.me/Anastasiia_Ramona' url={telegramIconSrc} alt="Telegram" />
          <SocialMediaButton href='https://www.youtube.com/channel/UC6dcySaxRNKM-QFGJRXcH8g' url={youtubeIconSrc} alt="YouTube" />
        </div>
        <p className={styles['footer-text']}>© 2024 Anastasiia Ramona. All rights reserved.</p>
      </div>
    </footer>
  );
})

Footer.displayName = 'Footer';