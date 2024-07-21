import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCards';
import styles from './Cards.module.css';

<<<<<<< HEAD
const Cards = () => {
      const [products, setProducts] = useState([]);
=======
const Cards = ({ addToCart }) => { // Asegúrate de recibir addToCart como prop
  const [products, setProducts] = useState([]);
>>>>>>> Nacho-CarritoCounter

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

<<<<<<< HEAD
      return (
        <>
        <div className={styles.productList}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> 
      </>
      );  
=======
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
      ))}
    </div>
  );
>>>>>>> Nacho-CarritoCounter
};

export default Cards;
