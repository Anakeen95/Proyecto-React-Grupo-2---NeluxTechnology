// src/molecules/ProductCards.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button/Button'; // Asegúrate de que Button no sea un botón dentro de otro botón
import Modal from './CartCardModal';
import styles from './Cards.module.css';

const ProductCard = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    if (product.quantity > 0) { // Verifica si hay stock disponible
      addToCart(product);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.card}>
        <img src={product.imageUrl} alt={product.name} className={styles.img} />
        <div className={styles.cardContent}>
          <h5 className={styles.cardTitle}>{product.name}</h5>
          <p className={styles.cardText}>{product.description}</p>
          <h4 className={styles.cardPrice}>${product.price}</h4>
          <div className={styles.buttonContainer}>
            <Button 
              quantity={product.quantity} 
              onClick={handleButtonClick} 
            />
          </div>
        </div>
      </div>
      {showModal && <Modal message="Se agregó el producto al carrito!" onClose={handleCloseModal} />}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
