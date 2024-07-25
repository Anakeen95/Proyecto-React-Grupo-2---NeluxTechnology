
// Imports the necessary modules and components
import React, { useState } from 'react';
import Button from "../atoms/Button/Button"; 
import CartCardModal from './CartCardModal'; 
import styles from "./Cards.module.css"; 
import Buttoninfo from '../atoms/Button/Buttoninfo'; 
import ProductsModal from './ProductsModal';

// Main component for the productcards page
const ProductCard = ({ product, addToCart }) => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State to keep track of which type of modal to show
  const [modalType, setModalType] = useState(null);

  // Function to handle adding product to the cart and showing the cart modal
  const handleAddToCart = () => {
    // Calls the addToCart function passed as a prop
    addToCart(product);
    // Sets showModal to true to display the modal
    setShowModal(true); 
  };

  // Function to handle button clicks and set the type of modal to display
  const handleButtonClick = (type) => {
    // Sets the type of modal (cart, info, more)
    setModalType(type);
    // Shows the modal
    setShowModal(true); 
  };

  // Function to close the modal and reset the modal type
  const handleCloseModal = () => {
    // Hides the modal
    setShowModal(false);
    // Resets the modal type
    setModalType(null); 
  };

  return (
    <>
      <div className={styles.card}>
        /* Displays product image */
        <img src={product.imageUrl} alt={product.name} className={styles.img} />
        <div>
          /* Displays product name */
          <h5 className={styles.cardTitle}>{product.name}</h5>
          /* Displays product description */
          <p className={styles.cardText}>{product.description}</p>
          /* Displays product price */
          <h4 className={styles.cardPrice}>${product.price}</h4>
        </div>
        /* Button to add product to cart, triggers handleButtonClick with 'cart' type */
        <button onClick={() => handleButtonClick('cart')}>
          <Button quantity={product.quantity} addToCart={handleAddToCart}/>
        </button>
        /* Button for additional product information, triggers handleButtonClick with 'info' type */
        <button onClick={() => handleButtonClick('info')}>
          <Buttoninfo/>
        </button>
        /* Button to view more details about the product, triggers handleButtonClick with 'more' type */
        <button onClick={() => handleButtonClick('more')} className={styles.moreButton}>
          Ver más
        </button>
      </div>
      /* Conditionally render CartCardModal if showModal is true and modalType is 'cart' */
      {showModal && modalType === 'cart' && <CartCardModal  message="¡El producto se agregó al carrito!"  onClose={handleCloseModal}  isOpen={showModal} />}
      /* Conditionally render ProductsModal if showModal is true and modalType is 'info' */
      {showModal && modalType === 'info' && <ProductsModal  product={product} onClose={handleCloseModal} isOpen={showModal}/>}
      /* Conditionally render ProductsModal if showModal is true and modalType is 'more' */
      {showModal && modalType === 'more' && 
        <ProductsModal product={product} onClose={handleCloseModal} isOpen={showModal}/>}
    </>
  );
};

export default ProductCard;
















