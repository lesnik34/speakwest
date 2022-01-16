import React from "react";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li className={styles.navigation_item}>
        <a href="" className={styles.navigation_link}>
          Наши программы
        </a>
      </li>

      <li className={styles.navigation_item}>
        <a href="" className={`${styles.navigation_link} ${styles.special}`}>
          Связаться с нами
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
