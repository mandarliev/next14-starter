import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>mandarliev</div>
      <div className={styles.text}>Mandarliev © All rights reserved.</div>
    </div>
  );
}

export default Footer;
