import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ea82e013456c3b34c9825d7fda238c668deae53f8766beea6255ad7f82fe640?apiKey=05ecaddee9444e0b87f4e90bae6c22dc&&apiKey=05ecaddee9444e0b87f4e90bae6c22dc"
          alt="Footer Logo"
          className={styles.footerLogo}
          loading="lazy"
        />
        <p className={styles.footerText}>
          all assets open-sourced under the Rad public license
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
