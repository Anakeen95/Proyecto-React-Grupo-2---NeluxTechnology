import React, { useEffect, useState } from 'react';
import styles from './CartCardModal.module.css';


const Modal = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 1000); // Ajustar el tiempo de la animación de salida
    }, 3000); // Mantén visible el modal durante 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalInner}>
        <img src="/checkmark.png" alt="Checkmark" className={styles.modalImage} />
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;