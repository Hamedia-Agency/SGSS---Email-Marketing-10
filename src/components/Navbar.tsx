"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navLogo} id="nav-logo">
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/691d0ba7c2cf864910f19e13.png"
            alt="Secure Guard Security Services Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="#how-it-works" className={styles.navLink}>
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#live-demo" className={styles.navLink}>
              Live Demo
            </Link>
          </li>
          <li>
            <Link href="#how-it-helps" className={styles.navLink}>
              How SGSS Helps
            </Link>
          </li>
          <li>
            <button
              onClick={onOpenConsultation}
              className={styles.navCta}
              id="nav-cta"
            >
              See How Active Video Monitoring Works
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <Link
            href="#how-it-works"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#live-demo"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Live Demo
          </Link>
          <Link
            href="#how-it-helps"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            How SGSS Helps
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenConsultation) onOpenConsultation();
            }}
            className={styles.mobileCta}
          >
            See How Active Video Monitoring Works
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
