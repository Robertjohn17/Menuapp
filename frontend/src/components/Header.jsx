import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>DNS</p>
      </div>
      <nav className={`${styles.nav} ${isMobile ? styles.active : ""}`}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/reservation">
              Make A Reservation
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
