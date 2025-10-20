'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import { socialLinks } from '../../data/socialLinks';
import styles from './ContactPopup.module.css';

type ContactPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      const popup = popupRef.current;
      const viewportHeight = window.innerHeight;
      const popupHeight = popup.offsetHeight;
      const centerTop = (viewportHeight - popupHeight) / 2;

      popup.style.top = `${Math.max(10, centerTop)}px`;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      timeoutRef.current = setTimeout(() => {
        if (!isHoveredRef.current) {
          onClose();
        }
      }, 5000);

      const handleScroll = () => {
        if (!isHoveredRef.current) {
          onClose();
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest(`.${styles.popup}`) && !isHoveredRef.current) {
          onClose();
        }
      };

      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClickOutside);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            ref={popupRef}
            className={styles.popup}
            initial={{
              opacity: 0,
              x: -100
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -100
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            <div className={styles.content}>
              <motion.div
                className={styles.socialLinks}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {socialLinks.map((link, index) => (
                  <SocialMediaButton
                    key={index}
                    href={link.href}
                    url={link.iconSrc}
                    alt={link.alt}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
