
import React, { useState } from 'react';
import Button from "../atoms/Button/Button";
import CartCardModal from './CartCardModal';
import styles from "./Cards.module.css";
import Buttoninfo from '../atoms/Button/Buttoninfo';
import ProductsModal from './ProductsModal';

const ProductCard = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleAddToCart = () => {
    addToCart(product); 
    setShowModal(true);
  };

  const handleButtonClick = (type) => {
    setModalType(type); // Establecer el tipo de modal según el botón clickeado
    setShowModal(true); // Mostrar el modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal
    setModalType(null); // Reiniciar el tipo de modal
  };

  return (
    <>
      <div className={styles.card}>
         <div className={styles.cardImgContainer}>
           <img src={product.imageUrl} alt={product.name} className={styles.cardImg}/>
         </div>
        <div>
          <h5 className={styles.cardTitle}>
            {product.name}
          </h5>
          <p className={styles.cardText}>
            {product.description}
          </p>
          <h4 className={styles.cardPrice}>
            ${product.price}
          </h4>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => handleButtonClick('cart')}>
            <Button quantity={product.quantity} addToCart={handleAddToCart}/>
          </button> {/* Botón para el carrito */}
          <button onClick={() => handleButtonClick('info')}>
            <Buttoninfo/>
          </button> {/* Botón para la información */}
          <button onClick={() => handleButtonClick('more')} className={styles.moreButton}>
            Ver más
          </button> {/* Botón "Ver más" */}
        </div>
      </div>
      {showModal && modalType === 'cart' && <CartCardModal message="¡El producto se agregó al carrito!" onClose={handleCloseModal} isOpen={showModal}/>} {/* Modal para el carrito */}
      {showModal && modalType === 'info' && <ProductsModal product={product} onClose={handleCloseModal} isOpen={showModal}/>} {/* Modal para la información */}
      {showModal && modalType === 'more' && <ProductsModal product={product} onClose={handleCloseModal} isOpen={showModal}/>} {/* Modal para "Ver más" */}
    </>
  );
};

export default ProductCard;















