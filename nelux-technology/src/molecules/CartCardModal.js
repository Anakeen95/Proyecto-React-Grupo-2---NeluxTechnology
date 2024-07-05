import React from 'react';
import styles from './CartCardModal.module.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
      <button className={styles.modalbuton} onClick={onClose}>X</button>
      <p>{message}</p>        
      </div>
  
    </div>
  );
};

export default Modal;
