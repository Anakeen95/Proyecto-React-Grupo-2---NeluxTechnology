import React, { useState } from 'react';
import styles from './CartSidebar.module.css';
import ThankYouModal from '../molecules/ThankYouModal'; 

const CartSidebar = ({ isOpen, cart, setCart, removeFromCart, updateCartQuantity, toggleCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRemoveFromCart = async (productId, quantity) => {
    removeFromCart(productId);

    try {
      const response = await fetch(`/api/products/${productId}/returnStock`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error('Error al devolver el stock a la base de datos');
      }

      console.log('Stock devuelto correctamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdateQuantity = async (productId, change) => {
    updateCartQuantity(productId, change);

    try {
      const response = await fetch(`/api/products/${productId}/updateStock`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: -change }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el stock en la base de datos');
      }

      console.log('Stock actualizado correctamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePay = () => {
    setShowModal(true);
    setTimeout(() => {
      setCart([]); // Vacía el carrito
      setShowModal(false); // Oculta el modal
      toggleCart(); // Cierra el carrito
    }, 3000); // Tiempo para mostrar el modal antes de vaciar el carrito
  };

  const handleEmptyCart = async () => {
    try {
      const returnStockPromises = cart.map(product => 
        fetch(`/api/products/${product.id}/returnStock`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: product.cartQuantity }),
        })
      );

      // Espera a que todas las promesas se resuelvan
      await Promise.all(returnStockPromises);
      
      setCart([]); // Vacía el carrito en el estado
      toggleCart(); // Opcional: cerrar el carrito después de vaciarlo
    } catch (error) {
      console.error('Error al vaciar el carrito:', error);
    }
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleCart}>X</button>
        <h2 className={styles.tuCarrito}>Tu Carrito</h2>
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>El carrito está vacío</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <div className={styles.cartItemContent}>
                <div className={styles.productInfo}>
                  <h4 className={styles.productName}>{product.name}</h4>
                  <p className={styles.productPrice}>${product.price}</p>
                </div>
                <div className={styles.quantityContainer}>
                  <button 
                    className={styles.quantityButton} 
                    onClick={() => handleUpdateQuantity(product.id, -1)} 
                    disabled={product.cartQuantity <= 1}>-</button>
                  <span className={styles.quantityText}>{product.cartQuantity}</span>
                  <button 
                    className={styles.quantityButton} 
                    onClick={() => handleUpdateQuantity(product.id, 1)} 
                    disabled={product.quantity <= 0}>+</button>
                </div>
                <button 
                  className={styles.deleteButton} 
                  onClick={() => handleRemoveFromCart(product.id, product.cartQuantity)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <>
            <button className={styles.emptyCartButton} onClick={handleEmptyCart}>Vaciar Carrito</button>
            <button className={styles.payButton} onClick={handlePay}>Pagar</button>
          </>
        )}
      </div>

      {/* Modal para "Gracias por su compra" */}
      <ThankYouModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CartSidebar;
