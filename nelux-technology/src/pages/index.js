import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from "../molecules/Cards";
import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/BannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent";

const Index = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = async (product) => {
    if (product.quantity <= 0) return;

    try {
      // Actualiza la cantidad del producto en JSON Server
      await axios.patch(`http://localhost:3000/Products/${product.id}`, {
        quantity: product.quantity - 1,
      });

      // Actualiza el estado del carrito
      updateCart(product);
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  // Función para actualizar el estado del carrito
  const updateCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1
      };
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Actualiza el conteo de productos en el carrito
  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <main>
      <Nav cartCount={cartCount} />
      <BannerHome />
      <Cards addToCart={addToCart} /> {/* Pasa la función addToCart a Cards */}
      <Carrousel />
      <Footer />
    </main>
  );
};

export default Index;