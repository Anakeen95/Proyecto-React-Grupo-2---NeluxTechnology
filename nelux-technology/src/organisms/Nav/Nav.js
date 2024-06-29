
import React, { useState } from 'react';
import styles from './Nav.module.css';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="./images/NeluxTech-Isotipo-Negro.png" alt="Logo" />
            </div>
            <div className={`${styles.navBar} ${isOpen ? styles.navBarOpen : ''}`}>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Home">Home</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Productos">Products</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Galleria">Gallery</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Contacto">Contact</a>
                </li>
            </div>
            <div className={styles.cartLogo}>
                <img src="./images/Cart-Icon.png" alt="Cart-Logo" />
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
            </div>
        </div>
    );
};

export default Nav;