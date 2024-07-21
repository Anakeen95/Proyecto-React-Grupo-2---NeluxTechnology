import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const Nav = ({ cartCount }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
            <div className={styles.logo}>
                <img src="./images/NeluxTech-Isotipo-Negro.png" alt="Logo" />
            </div>
            <ul className={`${styles.navBar} ${isOpen ? styles.navBarOpen : ''}`}>
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
            </ul>
            <div className={styles.cartLogo}>
                <img src="./images/Cart-Icon.png" alt="Cart-Logo" />
                { cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
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
