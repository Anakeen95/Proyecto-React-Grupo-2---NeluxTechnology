import React from 'react';
import styles from './CartCardModal.module.css';

const InfoModal = ({ product, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>
          {product.name}
        </h2>
        <p>
          {product.description}
        </p>
        <h4>
          ${product.price}
        </h4>
        <button onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InfoModal;