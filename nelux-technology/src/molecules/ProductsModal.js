// import React, { useState } from 'react';
// import Button from "../atoms/Button/Button";
// import Modal from './CartCardModal';
// import styles from "./Cards.module.css";
// import ProductsMoldal from "./ProductsModal";
// import Buttoninfo from '../atoms/Button/buttoninfo';
// // import {Modal, ModalHeader,ModalBody, ModalFooter} from 'reactstrap';
// import { ModalBody } from 'reactstrap';

// const ProductCard = ({ product }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleButtonClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };




//   return (
//     <>  
//       <div className={styles.card}>
//         <img src={product.imageUrl} alt={product.name} className={styles.img}/>
//         <div>
//           <h5 className={styles.cardTitle}>{product.name}</h5>
//           <p className={styles.cardText}>{product.description}</p>
//           <h4 className={styles.cardPrice}>${product.price}</h4>
//         </div>
//         <button onClick={handleButtonClick}><Button /></button>
//       </div>
//       {showModal && <Modal message="Ver mas" onClose={handleCloseModal} />}
      
//     </>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

// const ProductsModal = ({ product, onClose }) => {
//   return (
//     <Modal isOpen={true} toggle={onClose}>
//       <ModalHeader toggle={onClose}>Información del Producto</ModalHeader>
//       <ModalBody>
//         <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
//         <h5>{product.name}</h5>
//         <p>{product.description}</p>
//         <h4>${product.price}</h4>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="secondary" onClick={onClose}>Cerrar</Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default ProductsModal;





 import React from 'react';
 import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
 import styles from "./Cards.module.css";

 const ProductsModal = ({ product, onClose, isOpen }) => {
  console.log("modal de producto",product,onClose,isOpen)
   return (
     <Modal isOpen={isOpen} toggle={onClose}>
       <ModalHeader toggle={onClose}>Información del Producto</ModalHeader>
       <ModalBody>
       <img src={product.imageUrl} alt={product.name} className={styles.img}/>
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