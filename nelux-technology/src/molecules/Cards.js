import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCards';
import styles from './Cards.module.css';
import Nav from '../organisms/Nav/Nav';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Nav cartCount={cartCount} setCartCount={setCartCount} /> {/* Renderizar el componente Nav con cartCount */}
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );  
};

export default Cards;
