import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/BannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent";
import SectionCards from '../molecules/SectionCards';
import CartSidebar from '../molecules/CartSidebar'; // Asegúrate de importar el componente
import ContactForm from '../molecules/ContactForm'; // Importa el nuevo componente

const Index = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // Nuevo estado para el formulario de contacto

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
  };

  const addToCart = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products/${productId}`);
      const product = response.data;

      setCart(prevCart => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, cartQuantity: item.cartQuantity + 1 }
              : item
          );
        } else {
          return [...prevCart, { ...product, cartQuantity: 1 }];
        }
      });

      await axios.put(`http://localhost:4000/api/products/${productId}/updateStock`, {
        quantity: -1,
      });
    } catch (error) {
      console.error('Error al agregar al carrito:', error.response ? error.response.data : error.message);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const product = cart.find(item => item.id === productId);

      await axios.put(`http://localhost:4000/api/products/${productId}/returnStock`, {
        quantity: product.cartQuantity,
      });

      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } catch (error) {
      console.error('Error al eliminar del carrito:', error.response ? error.response.data : error.message);
    }
  };

  const updateCartQuantity = async (productId, delta) => {
    try {
      const product = cart.find(item => item.id === productId);

      if (delta === -1 && product.cartQuantity <= 1) return;
      if (delta === 1 && product.quantity <= 0) return;

      setCart(prevCart => prevCart.map(item =>
        item.id === productId
          ? { ...item, cartQuantity: item.cartQuantity + delta }
          : item
      ));

      await axios.put(`http://localhost:4000/api/products/${productId}/updateStock`, {
        quantity: -delta,
      });
    } catch (error) {
      console.error('Error al actualizar la cantidad del carrito:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.cartQuantity, 0));
  }, [cart]);

  return (
    <main>
      <Nav cartCount={cartCount} toggleCart={toggleCart} toggleContactForm={toggleContactForm} />
      <div id="Home">
        <BannerHome />
      </div>
      <div id="Products">
        <SectionCards addToCart={addToCart}/> 
      </div>
      <div id="Gallery">
        <Carrousel />
      </div>
        <Footer />
      <CartSidebar 
        isOpen={isCartOpen} 
        cart={cart} 
        setCart={setCart} 
        removeFromCart={removeFromCart} 
        updateCartQuantity={updateCartQuantity}
        toggleCart={toggleCart}
      />
      <ContactForm isOpen={isContactFormOpen} toggleForm={toggleContactForm} /> 
    </main>
  );
};

export default Index;
