import Image from 'next/image';
import SongList from '../../../components/SongList/SongList';
import BackButton from '../../../components/BackButton/BackButton';
import { covers } from '../../../data/covers';
import styles from './page.module.css';

export const dynamic = 'force-static';

export const metadata = {
  alternates: {
    canonical: 'https://anastasiia-ramona.netlify.app/covers',
  },
};

export default function CoversPage() {
  return (
    <div className={styles.coversPage}>
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 100 }}>
        <BackButton />
      </div>

      <div className={styles.leftSide}>
        <div className={styles.songListWrapper}>
          <SongList songs={covers} />
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.videoContainer}>
          <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
            <source src="/videos/music.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoBorder}>
            <Image
              src="/assets/border-for-video.webp"
              alt="Video border"
              className={styles.borderImage}
              width={1920}
              height={1080}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

