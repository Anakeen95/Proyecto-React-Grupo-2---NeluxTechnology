import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = ({ cartItems, removeFromCart, clearCart, closeCart, isCartOpen }) => {
  return (
    <div className={`${styles.cartContainer} ${isCartOpen ? styles.show : ''}`}>
      <div className={styles.cartContent}>
        <div className={styles.cartHeader}>
          <h3>Carrito de Compras</h3>
          <button className={styles.closeButton} onClick={closeCart}>X</button>
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

