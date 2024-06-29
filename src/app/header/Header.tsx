import musicLogoSrc from '../../assets/music.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { Vibes } from "next/font/google";
import { RefObject, useState } from 'react';
import BurgerButton from './BurgerButton';

const vibes = Vibes({ weight: '400', subsets: ['latin'] });

type HeaderProps = {
  footerRef: RefObject<HTMLElement>;
}

export const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles['site-header']}>
      <div className={styles['header-container']}>
        <div className={styles.logo}>
          <Image className={styles['logo-image']} src={musicLogoSrc} alt="Logo" />
          <h1 className={`${vibes.className}`}><Link href="/home">ANASTASIIA RAMONA</Link></h1>
          <p className={styles['logo-text']}>Unleashing the Unheard, One Beat at a Time</p>
        </div>
        <nav className={`${styles['site-navigation']} ${isOpen ? styles.active : ''}`}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']} onClick={handleNavLinkClick}>
              <Link href="/home">Home</Link>
            </li>
            <li className={styles['nav-item']} onClick={handleNavLinkClick}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles['nav-item']} onClick={handleNavLinkClick}>
              <Link href="/music">Music</Link>
            </li>
            <li className={styles['nav-item']} onClick={() => { handleNavLinkClick(); onClick(props.footerRef); }}>
              Contact
            </li>
          </ul>
        </nav>
        <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};


function onClick(footerRef: RefObject<HTMLElement>) {
  footerRef.current?.scrollIntoView({ behavior: 'smooth' });
}