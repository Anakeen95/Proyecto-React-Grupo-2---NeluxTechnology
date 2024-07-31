import React, { useEffect, useState } from 'react';
import styles from './CartItemBuyModal.module.css';

const Modal2 = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Confirmar Pago</h2>
        <p>¿Estás seguro de que deseas proceder con el pago?</p>
        <button onClick={onConfirm} className={styles.confirmButton}>Confirmar</button>
        <button onClick={onClose} className={styles.closeButton}>Cancelar</button>
      </div>
    </div>
  );
};

export default Modal2;