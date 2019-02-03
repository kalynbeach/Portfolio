import React from "react";
import styles from "../styles/footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links} />
    <div className={styles.copyright}>
      <span>&#169; Kalyn Beach {new Date().getFullYear()}</span>
    </div>
  </footer>
);

export default Footer;
