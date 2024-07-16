// src/pages/index.js
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
      setCart(prevCart => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // Si el producto no está en el carrito, agrégalo
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  // Actualiza el conteo de productos en el carrito
  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    console.log("Cart:", cart);  // Verifica que el carrito se actualiza
    console.log("Cart Count:", cartCount);  // Verifica que el conteo es correcto
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
