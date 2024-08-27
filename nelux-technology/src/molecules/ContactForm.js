import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import Modal from '../molecules/ModalForm'; 

const ContactForm = ({ isOpen, toggleForm }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);

    // Cerrar el formulario después de un pequeño retraso
    setTimeout(() => {
      toggleForm(); // Cierra el formulario
    }, 2000); // Ajusta el tiempo según el tiempo de la animación del modal
  };

  const handleClose = () => {
    toggleForm(); 
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={handleClose}>X</button>
        <div className={styles.formContent}>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nombre y Apellido" 
              className={styles.inputField} 
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.inputField} 
              required
            />
            <textarea 
              placeholder="Espacio para escribir" 
              className={styles.textareaField}
              required
            ></textarea>
            <input 
              type="submit" 
              value="Enviar" 
              className={styles.submitButton} 
            />
          </form>
        </div>
      </div>
      {showModal && (
        <Modal 
          message="Mensaje enviado correctamente" 
          onClose={() => {
            setShowModal(false); 
            toggleForm();
          }} 
        />
      )}
    </>
  );
};

export default ContactForm;
