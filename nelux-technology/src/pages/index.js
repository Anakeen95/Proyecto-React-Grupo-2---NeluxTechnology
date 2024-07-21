<<<<<<< HEAD
import SectionCard from "../molecules/SectionCards"
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from "../molecules/Cards";
>>>>>>> Nacho-CarritoCounter
import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/BannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent";

const Index = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
      }
    };

    fetchProducts();
    resetProductQuantities(); // Reset quantities on page load
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await axios.get(`http://localhost:3000/Products/${product.id}`);
      const updatedProduct = response.data;

      if (updatedProduct.quantity <= 0) return;

      await axios.patch(`http://localhost:3000/Products/${updatedProduct.id}`, {
        quantity: updatedProduct.quantity - 1,
      });

      updateCart(updatedProduct);
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  const updateCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1
      };
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const resetProductQuantities = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Products');
      const products = response.data;
  
      // Create an array of promises to update the quantity of each product
      const updatePromises = products.map(product =>
        axios.patch(`http://localhost:3000/Products/${product.id}`, {
          quantity: 10
        })
      );
  
      // Wait for all promises to resolve
      await Promise.all(updatePromises);
    } catch (error) {
      console.error('Error resetting product quantities:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <main>
<<<<<<< HEAD
      <section id="Navigation"><Nav /></section>
      <section id="Home"><BannerHome /></section>
      <section id="Products"><SectionCard /></section>
      <section id="Gallery"><Carrousel /></section>
      <section id="Cart"></section> // Aca agregar el componente del Carrito para que este vinculado a la Nav */
      <section id="Contact"><Footer /></section>
=======
      <Nav cartCount={cartCount} />
      <BannerHome />
      <Cards products={products} addToCart={addToCart} />
      <Carrousel />
      <Footer />
>>>>>>> Nacho-CarritoCounter
    </main>
  );
};

export default Index;
