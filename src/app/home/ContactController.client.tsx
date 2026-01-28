'use client';

import { useState } from 'react';
import NavigationSection from '@/components/NavigationSection/NavigationSection';
import ContactPopup from '@/components/ContactPopup/ContactPopup';

export default function ContactController() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <>
      <NavigationSection onContactClick={handleContactClick} isContactPopupOpen={isContactPopupOpen} />
      <ContactPopup isOpen={isContactPopupOpen} onClose={handleClosePopup} />
    </>
  );
}

