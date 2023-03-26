import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink to="/" className={styles.link} end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="contato" className={styles.link}>
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
