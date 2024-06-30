import Link from 'next/link';
import styles from './page.module.css';
import { Vibes } from "next/font/google";

const vibes = Vibes({ weight: '400', subsets: ['latin'] });

const Home = () => {
  return (
    <section className={styles['site-main']}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <h2>Welcome to Anastasiia Ramona&apos;s Music World</h2>
          <p>Explore Anastasiia Ramona&apos;s music and find out more about our journey.</p>
          <button className={styles['cta-button']}>
            <Link legacyBehavior href="/music" rel="preload">
              Learn More
            </Link>
          </button>
        </div>
      </section>
      <section className={styles['new-release-section']}>
        <h2 className={`${vibes.className}`}>THE LATEST RELEASE</h2>
        <div className={styles['new-release-content']}>
          <iframe
            src="https://www.youtube.com/embed/dLrnlyDI8Gg?si=ggo7EpNFpcSNeE5D"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            rel="preload"
          ></iframe>
          <p>Check out Anastasiia Ramona&apos;s latest release and get a taste of her new sound.</p>
        </div>
      </section>
    </section>
  );
};

export default Home;








