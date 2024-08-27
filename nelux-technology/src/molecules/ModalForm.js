import React from 'react';
import styles from './ModalForm.module.css';

const Modal = ({ message, onClose }) => {
    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent}>
          <div className={styles.modalInner}>
            <div className={styles.modalImage}>
              <img src="/checkmark.png" alt="Check Icon" /> {/* Cambia la ruta de la imagen si es necesario */}
            </div>
            <div>{message}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;