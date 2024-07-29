import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionCard from "../molecules/SectionCards";
import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/BannerHome";
import Cart from "../molecules/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent";

const Index = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    resetProductQuantities();
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

      const updatePromises = products.map(product =>
        axios.patch(`http://localhost:3000/Products/${product.id}`, {
          quantity: 10
        })
      );

      await Promise.all(updatePromises);
    } catch (error) {
      console.error('Error resetting product quantities:', error.response ? error.response.data : error.message);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const incrementQuantity = async (productId) => {
    try {
      const product = cart.find(item => item.id === productId);
      if (!product || product.quantity >= 10) return;

      await axios.patch(`http://localhost:3000/Products/${productId}`, {
        quantity: product.quantity + 1
      });

      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } catch (error) {
      console.error('Error incrementing quantity:', error.response ? error.response.data : error.message);
    }
  };

  const decrementQuantity = async (productId) => {
    try {
      const product = cart.find(item => item.id === productId);
      if (!product || product.quantity <= 1) return;

      await axios.patch(`http://localhost:3000/Products/${productId}`, {
        quantity: product.quantity - 1
      });

      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error('Error decrementing quantity:', error.response ? error.response.data : error.message);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <main>
      <section id="Navigation">
        <Nav cartCount={cartCount} toggleCart={toggleCart} />
      </section>
      <section id="Home">
        <BannerHome />
      </section>
      <section id="Products">
        <SectionCard products={products} addToCart={addToCart} />
      </section>
      <section id="Gallery">
        <Carrousel />
      </section>
      <section id="Contact">
        <Footer />
      </section>
      <section>
        <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} closeCart={toggleCart} isCartOpen={isCartOpen} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
      </section>
    </main>
  );
};

export default Index;


