import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const offset = 150;

    const handleScroll = () => {
      if (window.pageYOffset > offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <FloatingWhatsApp
      phoneNumber="51952163269"
      accountName="Paredes Sifuentes Abogados"
      avatar="/assets/img/favicon.ico"
      statusMessage="Normalmente responde en minutos"
      chatMessage="Hola, ¿en qué podemos ayudarte hoy?"
      placeholder="Escribe tu mensaje..."
      messageDelay={2}
      darkMode={false}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationDelay={30}
      notificationSound={false}
    />
  );
};

export default WhatsAppButton;
