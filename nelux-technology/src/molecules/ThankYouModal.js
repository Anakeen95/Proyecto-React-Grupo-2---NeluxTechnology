import React, { useEffect, useState } from 'react';
import styles from './ThankYouModal.module.css'; 

const ThankYouModal = ({ isVisible, onClose }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 1000); // Tiempo para que el modal se cierre completamente
      }, 3000); // Tiempo para mostrar el modal antes de cerrarlo
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalInner}>
          <img src="/checkmark.png" alt="Checkmark" className={styles.modalImage} />
          <p>¡Gracias por su compra!</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
