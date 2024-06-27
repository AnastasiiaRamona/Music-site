import instagramIconSrc from '../../assets/instagram-icon.png';
import telegramIconSrc from '../../assets/telegram-icon.png';
import youtubeIconSrc from '../../assets/youtube-icon.png';
import SocialMediaButton from './SocialMediaButton';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['site-footer']}>
      <div className={styles['footer-content']}>
        <div className={styles['social-list']}>
          <SocialMediaButton href='https://www.instagram.com/sia.de.ramona/' url={instagramIconSrc} alt="Instagram" />
          <SocialMediaButton href='https://t.me/AnastasiaKabanova' url={telegramIconSrc} alt="Telegram" />
          <SocialMediaButton href='https://www.youtube.com/channel/UC6dcySaxRNKM-QFGJRXcH8g' url={youtubeIconSrc} alt="YouTube" />
        </div>
        <p className={styles['footer-text']}>© 2024 Anastasiia Ramona. All rights reserved.</p>
      </div>
    </footer>
  );
}