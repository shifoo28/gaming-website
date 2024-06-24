import React from "react";
import IonIcon from "@reacticons/ionicons";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src="assets/playstation-fill.png" alt="" />
      </a>
      <a href="#" className={styles.menu}>
        <IonIcon name="apps-outline" />
      </a>
      <ul className={styles.nav}>
        <li>
          <a href="#">playstation hits</a>
        </li>
        <li>
          <a href="#">playstation plus</a>
        </li>
        <li>
          <a href="#">playstation classic</a>
        </li>
      </ul>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <IonIcon name="search-outline" className={styles.search_icon} />
      </div>
      {/* Mobile */}
      <ul className={styles.nav_collapse}>
        <li>
          <a href="#">playstation hits</a>
        </li>
        <li>
          <a href="#">playstation plus</a>
        </li>
        <li>
          <a href="#">playstation classic</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
