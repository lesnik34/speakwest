import React from "react";
import { useDispatch } from "react-redux";
import { scrollPageToPoint } from "@utils/helpers";

import styles from "./Navigation.module.scss";
import { toggleBurger } from "@store/slices/global";

const Navigation = () => {
  const dispatch = useDispatch();

  const buttonClick = () => {
    const element = document.querySelector("#offer");
    scrollPageToPoint(element, 50);
    dispatch(toggleBurger());
  };

  return (
    <ul className={styles.navigation}>
      <li className={styles.navigation_item}>
        <button onClick={buttonClick} className={styles.navigation_link}>
          Наши программы
        </button>
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
