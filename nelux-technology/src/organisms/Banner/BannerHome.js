import React, { useEffect, useState } from 'react';
import styles from './BannerHome.module.css'
import Image from 'react-bootstrap/Image'


//const BannerHome = () => {
 // return (
 //   <section className={styles.homeContainer}>
      
 //   </section>
    
   
  //)
//}

const BannerHome = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/BannerHome')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setBannerData(data[0]);
        }
      })
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  return (
    <section className={styles.homeImg}>
      {bannerData && (
        <img src={bannerData.imageUrl} alt="Banner Home Nelux" className={styles.homeImg} />
      )}
    </section>
  );
};

export default BannerHome