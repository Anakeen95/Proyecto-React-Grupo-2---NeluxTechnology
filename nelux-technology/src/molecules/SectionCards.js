import React from 'react';
import styles from './SectionCard.module.css';
import Cards from './Cards';

const SectionCards = ({ addToCart }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Nuestros Productos</h2>
      <Cards addToCart={addToCart} />
    </section>
  );
};

export default SectionCards;
