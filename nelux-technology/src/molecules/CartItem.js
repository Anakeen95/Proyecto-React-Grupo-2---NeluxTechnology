import React, { useState } from 'react';
import styles from './CartItem.module.css';
import InfoModal from './CartCardModal'; // Asegúrate de importar el componente correcto

const CartItem = ({ item, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const openInfoModal = () => setInfoModalOpen(true);
  const closeInfoModal = () => setInfoModalOpen(false);

  return (
    <li className={styles.cartItem}>
      <img src={item.imageUrl} alt={item.name} className={styles.cartItemImg} />
      <div className={styles.cartItemDetails}>
        <h4>{item.name}</h4>
        <p>${item.price * item.quantity}</p>
        <p>Cantidad: {item.quantity}</p>
      </div>
      <div className={styles.quantityButtons}>
        <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>Eliminar</button>
        <button className={styles.quantityButton} onClick={() => incrementQuantity(item.id)} disabled={item.quantity >= 10}>+</button>
        <button className={styles.quantityButton} onClick={() => decrementQuantity(item.id)} disabled={item.quantity < 1}>-</button>
        <button className={styles.infoButton} onClick={openInfoModal}>Ver Info</button>
        {isInfoModalOpen && <InfoModal product={item} onClose={closeInfoModal} />}
      </div>
    </li>
  );
};

export default CartItem;
