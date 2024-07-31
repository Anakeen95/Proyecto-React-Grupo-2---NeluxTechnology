import React, { useState } from 'react';
import styles from './CartItem.module.css';
import Modal2 from './CartItemBuyModal.js';

const CartItem = ({ item, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const confirmPayment = () => {
    // Lógica para manejar el pago
    alert('Pago confirmado');
    closeModal();
  };

  return (
    <li className={styles.cartItem}>
      <img src={item.imageUrl} alt={item.name} className={styles.cartItemImg}/>
      <div className={styles.cartItemDetails}>
        <h4>
          {item.name}
        </h4>
        <p>
          ${parseInt(item.price.replace(/\./g, ''), 10) * item.quantity}
        </p>
        <p>
          Cantidad: {item.quantity}
        </p>
      </div>
      <div className={styles.quantityButtons}>
        <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
          Eliminar
        </button>
        <button className={styles.quantityButton} onClick={() => incrementQuantity(item.id)} disabled={item.quantity >= 10}>
          +
        </button>
        <button className={styles.quantityButton} onClick={() => decrementQuantity(item.id)} disabled={item.quantity < 1}>
          -
        </button>
        <button className={styles.payButton} onClick={openModal}>
          Pagar
        </button>
        <Modal2 isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmPayment}/>
      </div>
    </li>
  );
};

export default CartItem;