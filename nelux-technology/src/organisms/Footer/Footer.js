import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Seguinos}>
        <p className={styles.Subtitulos}><b>ATENCION AL CLIENTE:</b></p>
        <p className={styles.Paragraph}>
          0810-555-8957 <br></br>
          consultas@neluxtech.com.ar <br></br>
          L a V de 9 a 18
        </p>
        <br></br>
        <p className={styles.Subtitulos}><b>NELUXTECH PICKUP POINT:</b></p>
        <p className={styles.Paragraph}>
          Buenos Aires: L a V de 9 a 18 <br></br>
          Cordoba: L a V de 8 a 17
        </p>

      </div>
      <div className={styles.logoFooter}>
        <img src="./images/NeluxTech-Imagotipo-Negro.png" alt="Logo-Footer" ></img>
      </div>
      <div className={styles.Redes}>
        <ul className={styles.listStyle}>
          <li className={styles.itemStyle}>
            <a href="https://www.facebook.com/" target="_blank">
              <img src='./images/facebook-icon.png' alt="Facebook"></img>
            </a>
          </li>
          <li className={styles.itemStyle}>
            <a href="https://x.com/?lang=es" target="_blank">
              <img src='./images/twitter-icon.png' alt="Twitter"></img>
            </a>
          </li>
          <li className={styles.itemStyle}>
            <a href="https://www.instagram.com/" target="_blank">
              <img src='./images/instagram-icon.png' alt="Instagram"></img>
            </a>
          </li>
          <li className={styles.itemStyle}>
            <a href="https://web.whatsapp.com/" target="_blank">
              <img src='./images/whatsapp-icon.png' alt="Whatsapp"></img>
            </a>
          </li>
          <li className={styles.itemStyle}>
            <a href="https://web.telegram.org/" target="_blank">
              <img src='./images/telegram-icon.png' alt="Telegram"></img>
            </a>
          </li>

        </ul>
      </div>
    </div >
  )
}

export default Footer