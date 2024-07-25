
// Imports the necessary modules and components
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'; // Importing components from Reactstrap for modal functionality
import styles from "./Cards.module.css"; // Importing CSS module for styling

// Main component for the productmodal page
const ProductsModal = ({ product, onClose, isOpen }) => {
  // Debugging: Log product details, onClose function, and isOpen state
  console.log("modal de producto", product, onClose, isOpen); 

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      /* Modal Header */
      <ModalHeader toggle={onClose}>Información del Producto</ModalHeader>
      
      /* Modal Body: Displays product information */
      <ModalBody>
        /* Product image */
        <img src={product.imageUrl} alt={product.name} className={styles.img} />
        <div>
          /* Product name */
          <h5 className={styles.cardTitle}>{product.name}</h5>
          /* Product description */
          <p className={styles.cardText}>{product.description}</p>
          /* Product price */
          <h4 className={styles.cardPrice}>${product.price}</h4>
        </div>
      </ModalBody>
      
      /* Modal Footer: Contains the close button */
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProductsModal;

// FUNCIONA PERO TIRA ERROR DE BOOTSTRAP
// "react-transition-group": "^4.4.2" - Ensure the correct version of react-transition-group is installed
