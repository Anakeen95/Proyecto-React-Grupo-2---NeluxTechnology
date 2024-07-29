import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <li className={styles.cartItem}>
      <img src={item.imageUrl} alt={item.name} className={styles.cartItemImg}/>
      <div className={styles.cartItemDetails}>
        <h4>
          {item.name}
        </h4>
        <p>
          ${item.price}
        </p>
        <p>
          Cantidad: {item.quantity}
        </p>
      </div>
      <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;
