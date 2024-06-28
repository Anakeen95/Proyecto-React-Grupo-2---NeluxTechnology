
import React from 'react';
import styles from './Nav.module.css'


const Nav = () => {
    return (
        <div className={styles.nav}>
            <div class={styles.logo}>
                <img src="./images/NeluxTech-Isotipo-Negro.png" alt="Logo" ></img>
            </div>
            <ul className={styles.navBar}>
                <li className={styles.navBarItem}>
                    <a className="navbar-link" href="Home">Home</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className="navbar-link" href="Productos">Products</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className="navbar-link" href="Galleria">Gallery</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className="navbar-link" href="Contacto">Contact</a>
                </li>
            </ul>
            <div class={styles.cartLogo}>
                <img src="./images/Cart-Icon.png" alt="Cart-Logo" ></img>
            </div>
        </div>
    )
}

export default Nav