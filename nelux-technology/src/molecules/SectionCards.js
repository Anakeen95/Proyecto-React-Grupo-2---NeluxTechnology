
// Imports the necessary modules and components
import React from 'react'; 
import Cards from './Cards'; 
import styles from './SectionCard.module.css';

// Main component for the sectioncards page
const SectionCards = ({ products, addToCart }) => {
  return (
    <section className={styles.section}>
      {/* Section title */}
      <h2 className={styles.sectionTitle}>Nuestros Productos</h2>
      
      {/* Renders Cards component with products and addToCart props */}
      <Cards products={products} addToCart={addToCart} />
    </section>
  );
};

export default SectionCards;
