import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Seguinos}>
        <p>Seguinos en nuestras redes</p>
      </div>
      <div className={styles.Redes}>
        <ul className={styles.footer}>
          <li className={styles.footerItem}>
            <a className="navbar-link" href="Home">Home</a>
          </li>
          <li className={styles.footerItem}>
            <a className="navbar-link" href="Productos">Products</a>
          </li>
          <li className={styles.footerItem}>
            <a className="navbar-link" href="Galleria">Gallery</a>
          </li>
          <li className={styles.footerItem}>
            <a className="navbar-link" href="Contacto">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer