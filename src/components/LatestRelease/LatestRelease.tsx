import getTheLatestRelease from '@/data/albums';
import Image from 'next/image';
import styles from './LatestRelease.module.css';
const vinylSrc = '/assets/vinyl.webp';
import { motion } from 'framer-motion';

export default function LatestRelease() {
  const latestReleaseSrc = getTheLatestRelease().coverSrc;

  return <div className={styles['latest-release']}>
    <motion.div
      className={styles['latest-release-vinyl']}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: 'linear',
      }}
    >
      <Image className={styles['latest-release-vinyl__image']}
        src={vinylSrc}
        alt="Spinning vinyl"
        quality={100}
        width={900}
        height={900}
      />
      <Image className={styles['latest-release-cover']}
        src={latestReleaseSrc}
        alt="Latest release cover"
        quality={100}
        width={900}
        height={900}
      />
    </motion.div>
  </div>
}