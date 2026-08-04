import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a0262de60a7a52fdc112210.png"
            alt="SGSS Logo"
            className={styles.logoImg}
            style={{ height: '76px' }}
          />
        </div>
        <div className={styles.footerLinks}>
          <Link href="#how-it-works" className={styles.footerLink}>
            How It Works
          </Link>
          <Link href="#live-demo" className={styles.footerLink}>
            Live Demo
          </Link>
          <Link href="#how-it-helps" className={styles.footerLink}>
            How SGSS Helps
          </Link>
          <Link href="#lead-form" className={styles.footerLink}>
            Get Assessment
          </Link>
        </div>
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} Secure Guard Security Services. All rights reserved. Active Video Monitoring turns passive security cameras into proactive real-time defense systems.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
