import React from 'react';
import Cards from './Cards';
import styles from './SectionCard.module.css';

const SectionCards = ({ products }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Nuestros Productos</h2>
          <Cards/>
    </section>
  );
};
export default SectionCards;