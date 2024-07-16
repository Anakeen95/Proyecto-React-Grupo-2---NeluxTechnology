import React, { useState } from 'react';
import Button from "../atoms/Button/Button";
import Modal from './CartCardModal';
import styles from "./Cards.module.css";
import axios from 'axios';

const ProductCard = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = async () => {
    if (product.quantity > 0) {
      setShowModal(true);
      addToCart();
      await updateQuantity(product.id, product.quantity - 1); // Update quantity in database
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateQuantity = async (productId, newQuantity) => {
    try {
      await axios.patch(`http://localhost:3000/Products/${productId}`, { quantity: newQuantity });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <>  
      <div className={styles.card}>
        <img src={product.imageUrl} alt={product.name} className={styles.img}/>
        <div>
          <h5 className={styles.cardTitle}>{product.name}</h5>
          <p className={styles.cardText}>{product.description}</p>
          <h4 className={styles.cardPrice}>${product.price}</h4>
        </div>
        <button onClick={handleButtonClick} disabled={product.quantity === 0}><Button /></button>
      </div>
      {showModal && <Modal message="El producto se agregó al carrito!" onClose={handleCloseModal} />}
    </>
  );
};

export default ProductCard;