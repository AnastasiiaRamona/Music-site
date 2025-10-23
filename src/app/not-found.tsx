'use client';

import { motion } from 'framer-motion';
import BackButton from '../components/BackButton/BackButton';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 9999 }}>
        <BackButton href="/" />
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The page you&apos;re looking for seems to have wandered off into the digital void.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NotFound;
