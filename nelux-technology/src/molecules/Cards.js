// src/molecules/Cards.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCards';
import styles from './Cards.module.css';

const Cards = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={() => addToCart(product.id)} 
        />
      ))}
    </div>
  );
};

export default Cards;
