
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import styles from "./Cards.module.css";

const ProductsModal = ({ product, onClose, isOpen }) => {
  console.log("modal de producto", product, onClose, isOpen)
  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Información del Producto</ModalHeader>
      <ModalBody>
        <img src={product.imageUrl} alt={product.name} className={styles.img} />
        <div>
          <h5 className={styles.cardTitle}>{product.name}</h5>
          <p className={styles.cardText}>{product.description}</p>
          <h4 className={styles.cardPrice}>${product.price}</h4>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProductsModal;

//FUNCIONA PERO TIRA ERROR DE BOOTSTRAP



//"react-transition-group": "^4.4.2"