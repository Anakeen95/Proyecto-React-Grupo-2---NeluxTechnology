// Imports the necessary modules and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionCard from "../molecules/SectionCards"
import Footer from "../organisms/Footer/Footer";
import Nav from "../organisms/Nav/Nav";
import BannerHome from "../organisms/Banner/BannerHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "../organisms/Carrousel/CarrouselComponent";

// Main component for the index page
const Index = () => {
  // States variables for cart items, cart count, and products
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch product data from the API
    const fetchProducts = async () => {
      try {
        // Fetchs product data from the API endpoint
        const response = await axios.get('http://localhost:3000/Products');
        // Updates the state with the fetched products
        setProducts(response.data);
      } catch (error) {
        // Log any errors that occur during the fetch process
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
      }
    };

    // Calls the fetchProducts function to load product data on component mount
    fetchProducts();

    // Calls resetProductQuantities function to reset product quantities on page load
    resetProductQuantities();
    // Empty dependency array ensures this effect runs only once on mount
  }, []);

  // Function to add a product to the cart
  const addToCart = async (product) => {
    try {
      // Fetchs the current state of the product from the server using its ID
      const response = await axios.get(`http://localhost:3000/Products/${product.id}`);
      const updatedProduct = response.data;

      // Checks if the product is out of stock; if so, exit the function
      if (updatedProduct.quantity <= 0) return;

      // Decrements the product quantity on the server
      await axios.patch(`http://localhost:3000/Products/${updatedProduct.id}`, {
        quantity: updatedProduct.quantity - 1,
      });

      // Updates the cart state with the product
      updateCart(updatedProduct);
    } catch (error) {
      // Logs any errors that occur during the fetch or update process
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  // Function to update the cart state with a product
  const updateCart = (product) => {
    // Finds the index of the product in the current cart state
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product is already in the cart; update it's quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1
      };
      // Updates the cart state
      setCart(updatedCart);
    } else {
      // Product is not in the cart; add it with a quantity of 1
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Function to reset the quantities of all products to 10
  const resetProductQuantities = async () => {
    try {
      // Fetchs the list of all products from the server
      const response = await axios.get('http://localhost:3000/Products');
      const products = response.data;

      // Creates an array of promises to update each product's quantity to 10
      const updatePromises = products.map(product =>
        axios.patch(`http://localhost:3000/Products/${product.id}`, {
          quantity: 10
        })
      );

      // Waits for all the promises to resolve
      await Promise.all(updatePromises);
    } catch (error) {
      // Logs any errors that occur during the fetch or update process
      console.error('Error resetting product quantities:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    // Updates the cart count whenever the cart state changes
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    // Dependency array that ensures this effect runs whenever the `cart` changes
  }, [cart]); 

  return (
    <main>
      /* Navigation section with cart count */
      <section id="Navigation">
        <Nav cartCount={cartCount}/>
      </section>  
      /* Banner section */
      <section id="Home">
        <BannerHome/>
      </section>  
      /* Products section with products, cards and addToCart function to add products on shopping cart */
      <section id="Products">
        <SectionCard products={products} addToCart={addToCart}/>
      </section>
      /* Images Gallery section */
      <section id="Gallery">
        <Carrousel/>
      </section>
      /* Footer section */
      <section id="Contact">
        <Footer/>
      </section>
    </main>
  );
};

export default Index;
