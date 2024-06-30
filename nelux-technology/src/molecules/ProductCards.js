import React, { useState } from 'react';
import Button from "../atoms/Button/Button";
import Modal from './CartCardModal';
import styles from "./Cards.module.css";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>  
      <div className={styles.card}>
        <img src={product.imageUrl} alt={product.name} className={styles.img}/>
        <div className={styles.cardContent}>
         <div>
           <h5 className={styles.cardTitle}>{product.name}</h5>
           <p className={styles.cardText}>{product.description}</p>
           <h4 className={styles.cardPrice}>${product.price}</h4>
           <div className={styles.spacer}></div>
         </div>
         <div className={styles.buttonContainer}>
            <button onClick={handleButtonClick}><Button /></button>
         </div>
        </div>  
      </div>
      {showModal && <Modal message="Se agregó el producto al carrito!" onClose={handleCloseModal} />}  
    </>
  );
};

export default ProductCard;