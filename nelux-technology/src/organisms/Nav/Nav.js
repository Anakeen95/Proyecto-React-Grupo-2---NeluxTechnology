import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const Nav = ({ cartCount, toggleCart, toggleContactForm }) => { // Recibe la función toggleContactForm como prop
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
            <div className={styles.logo}>
                <img src="./images/NeluxTech-Isotipo-Negro.png" alt="Logo"/>
            </div>
            <ul className={`${styles.navBar} ${isOpen ? styles.navBarOpen : ''}`}>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Home" onClick={handleCloseMenu}>
                        Home
                    </a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Products" onClick={handleCloseMenu}>
                        Productos
                    </a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Gallery" onClick={handleCloseMenu}>
                        Galería
                    </a>
                </li>
                <li className={styles.navBarItem}>
                    <a className={styles.navBarLink} href="#Contact" onClick={() => { handleCloseMenu(); toggleContactForm(); }}>
                        Contacto
                    </a>
                </li>
            </ul>
            <div className={styles.cartLogo} onClick={toggleCart}>
                <img src="./images/Cart-Icon.png" alt="Cart-Logo" />
                { cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen : ''}`}></div>
                <div className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen : ''}`}></div>
                <div className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen : ''}`}></div>
            </div>
        </div>
    );
};

export default Nav;
