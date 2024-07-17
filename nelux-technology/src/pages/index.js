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

  // Add to Shopping Cart Function
  const addToCart = async (product) => {
    try {
      // Fetch the updated product data from the JSON Server db
      const response = await axios.get(`http://localhost:3000/Products/${product.id}`);
      const updatedProduct = response.data;

      if (updatedProduct.quantity <= 0) return;

      // Update the quantity of the product in the JSON Server db
      await axios.patch(`http://localhost:3000/Products/${updatedProduct.id}`, {
        quantity: updatedProduct.quantity - 1,
      });

      // Update the shopping cart state
      updateCart(updatedProduct);
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  // Function to update the shopping cart state
  const updateCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, updates the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1
      };
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, adds it
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Update the cart count whenever the shopping cart state changes
  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <main>
      <Nav cartCount={cartCount} />
      <BannerHome />
      <Cards addToCart={addToCart} />
      <Carrousel />
      <Footer />
    </main>
  );
};

export default Index;
