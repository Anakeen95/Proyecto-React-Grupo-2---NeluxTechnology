import React, { useEffect, useState } from 'react';
import styles from './BannerHome.module.css'

const BannerHome = () => {


  return (
    <section className={styles.homeContainer}>
        <picture>
          <source media="(max-width: 600px)" srcSet="./images/banner-home-mobile.jpg"/>
          <source media="(min-width: 601px)" srcSet="./images/banner-home.jpg" />
          <img className={styles.homeImg} src="./images/banner-home.jpg" alt="bannerhome" />
        </picture>
    </section>
    
  );
};

export default BannerHome