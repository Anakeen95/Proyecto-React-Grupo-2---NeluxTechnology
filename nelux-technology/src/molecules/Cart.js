import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = ({ cartItems, removeFromCart, clearCart, closeCart, isCartOpen }) => {
  return (
    <div className={`${styles.cartContainer} ${isCartOpen ? styles.show : ''}`}>
      <div className={styles.cartContent}>
        <button className={styles.closeButton} onClick={closeCart}>
          <svg
            className={styles.closeIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className={styles.cartHeader}>
          <h3>Carrito de Compras</h3>
        </div>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul className={styles.cartItems}>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
        )}
        <div className={styles.cartActions}>
          <button className={styles.clearButton} onClick={clearCart}>Vaciar Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;



