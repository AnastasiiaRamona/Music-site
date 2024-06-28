import musicLogoSrc from '../../assets/music.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { Vibes } from "next/font/google";
import { RefObject } from 'react';

const vibes = Vibes({ weight: '400', subsets: ['latin'] });

type HeaderProps = {
  footerRef: RefObject<HTMLElement>;
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles['site-header']}>
      <div className={styles['header-container']}>
        <div className={styles.logo}>
          <Image className={styles['logo-image']} src={musicLogoSrc} alt="Logo" />
          <h1 className={`${vibes.className}`}><Link href="/home">ANASTASIIA RAMONA</Link></h1>
          <p className={styles['logo-text']}>Unleashing the Unheard, One Beat at a Time</p>
        </div>
        <nav className={styles['site-navigation']}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <Link href="/home">Home</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/music">Music</Link>
            </li>
            <li onClick = {() => onClick(props.footerRef)} className={styles['nav-item']}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

function onClick(footerRef: RefObject<HTMLElement>) {
  footerRef.current?.scrollIntoView({ behavior: 'smooth' });
}