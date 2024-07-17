import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCards';
import styles from './Cards.module.css';

const Cards = ({ addToCart }) => { // Asegúrate de recibir addToCart como prop
  const [products, setProducts] = useState([]);

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

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
      ))}
    </div>
  );
};

export default Cards;
