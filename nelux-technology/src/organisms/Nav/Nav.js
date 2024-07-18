import React, { useState } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="./images/NeluxTech-Isotipo-Negro.png" alt="Logo" />
            </div>
            <div className={`${styles.navBar} ${isOpen ? styles.navBarOpen : ''}`}>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Home" onClick={handleCloseMenu}>Home</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Products" onClick={handleCloseMenu}>Products</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Gallery" onClick={handleCloseMenu}>Gallery</a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Contact" onClick={handleCloseMenu}>Contact</a>
                </li>
            </div>
            <div className={styles.cartLogo}>
                <a href='#Cart'><img src="./images/Cart-Icon.png" alt="Cart-Logo" /></a>
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