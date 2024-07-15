//  import React, { useState } from 'react';
//  import Button from "../atoms/Button/Button";
//  import Modal from './CartCardModal';
//  import styles from "./Cards.module.css";
//  import Buttoninfo from '../atoms/Button/buttoninfo';
//  import {Modal, ModalHeader,ModalBody, ModalFooter} from 'reactstrap';
//  import { ModalBody } from 'reactstrap';
//  import ProductsModal from './ProductsModal';

//  const ProductCard = ({ product }) => {
//    const [showModal, setShowModal] = useState(false);
//    const [modalType, setModalType] = useState(null);
  

//  const handleButtonClick = () => {
//    setShowModal(true);
//  };
//     const handleButtonClick = (type) => {
//       setModalType(type); // Establecer el tipo de modal según el botón clicado
//       setShowModal(true); // Mostrar el modal
//     };
//    const handleCloseModal = () => {
//      setShowModal(false); // Cerrar el modal
//      setModalType(null); // Reiniciar el tipo de modal
//    };

//  const handleCloseModal = () => {
//    setShowModal(false);
//  };

  




//    return (
//      <>  
//        <div className={styles.card}>
//          <img src={product.imageUrl} alt={product.name} className={styles.img}/>
//          <div>
//            <h5 className={styles.cardTitle}>{product.name}</h5>
//            <p className={styles.cardText}>{product.description}</p>
//            <h4 className={styles.cardPrice}>${product.price}</h4>
//          </div>
//          {/* <button onClick={handleButtonClick}><Button /></button>
//          <button onClick={handleButtonClick}><Buttoninfo/></button> */}
//           <button onClick={() => handleButtonClick('cart')}><Button /></button> {/* Botón para el carrito */}
//           <button onClick={() => handleButtonClick('info')}><Buttoninfo/></button> {/* Botón para la información */}
//        </div>
//        {/* {showModal && <Modal message="El producto se agregó al carrito!" onClose={handleCloseModal} />}
//         */}
//         {showModal && modalType === 'cart' && <Modal message="El producto se agregó al carrito!" onClose={handleCloseModal} />} {/* Modal para el carrito */}
//        {showModal && modalType === 'info' && <ProductsModal product={product} onClose={handleCloseModal} />} {/* Modal para la información del producto */}
      
//      </>
//    );
//  };

//  export default ProductCard;
// NO FUNCIONA 

// import React, { useState } from 'react';
// import Button from "../atoms/Button/Button";
// import Modal from './CartCardModal';
// import styles from "./Cards.module.css";
// import Buttoninfo from '../atoms/Button/buttoninfo';
// import ProductsModal from './ProductsModal';

// const ProductCard = ({ product }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState(null);

//   const handleButtonClick = (type) => {
//     setModalType(type); // Establecer el tipo de modal según el botón clicado
//     setShowModal(true); // Mostrar el modal
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Cerrar el modal
//     setModalType(null); // Reiniciar el tipo de modal
//   };

//   return (
//     <>  
//       <div className={styles.card}>
//         <img src={product.imageUrl} alt={product.name} className={styles.img} />
//         <div>
//           <h5 className={styles.cardTitle}>{product.name}</h5>
//           <p className={styles.cardText}>{product.description}</p>
//           <h4 className={styles.cardPrice}>${product.price}</h4>
//         </div>
//         <button onClick={() => handleButtonClick('cart')}><Button /></button> {/* Botón para el carrito */}
//         <button onClick={() => handleButtonClick('info')}><Buttoninfo /></button> {/* Botón para la información del producto */}
//       </div>
//       {showModal && modalType === 'cart' && <Modal message="¡El producto se agregó al carrito!" onClose={handleCloseModal} />} {/* Modal para el carrito */}
//       {showModal && modalType === 'info' && <ProductsModal product={product} onClose={handleCloseModal} />} {/* Modal para la información del producto */}
//     </>
//   );
// };

// export default ProductCard;

//FUNCIONAAAAAAAAAAA pero al seleccionar el boton no hace nada 

  import React, { useState } from 'react';
  import Button from "../atoms/Button/Button";
  import CartCardModal from './CartCardModal';
  import styles from "./Cards.module.css";
  import Buttoninfo from '../atoms/Button/buttoninfo';
  import ProductsModal from './ProductsModal';

  const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);

    const handleButtonClick = (type) => {
      setModalType(type); // Establecer el tipo de modal según el botón clicado
      setShowModal(true); // Mostrar el modal
    };

    const handleCloseModal = () => {
      setShowModal(false); // Cerrar el modal
      setModalType(null); // Reiniciar el tipo de modal
    };

    return (
      <>  
        <div className={styles.card}>
          <img src={product.imageUrl} alt={product.name} className={styles.img} />
          <div>
            <h5 className={styles.cardTitle}>{product.name}</h5>
            <p className={styles.cardText}>{product.description}</p>
            <h4 className={styles.cardPrice}>${product.price}</h4>
          </div>
          <button onClick={() => handleButtonClick('cart')}><Button /></button> {/* Botón para el carrito */}
          <button onClick={() => handleButtonClick('info')}><Buttoninfo /></button> {/* Botón para la información */}
          <button onClick={() => handleButtonClick('more')} className={styles.moreButton}>Ver más</button> {/* Botón "Ver más" */}
        </div>
        {showModal && modalType === 'cart' && <CartCardModal message="¡El producto se agregó al carrito!" onClose={handleCloseModal} isOpen={showModal} />} {/* Modal para el carrito */}
        {showModal && modalType === 'info' && <ProductsModal product={product} onClose={handleCloseModal} isOpen={showModal} />} {/* Modal para la información */}
        {showModal && modalType === 'more' && <ProductsModal product={product} onClose={handleCloseModal} isOpen={showModal} />} {/* Modal para "Ver más" */}
      </>
    );
  };

  export default ProductCard;


//FUNCIONA PERO ERROR EN EL BOOTSTRAP














