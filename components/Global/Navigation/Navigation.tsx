import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";

import { toggleBurger } from "@store/slices/global";
import { RootState } from "@store/.";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const { isBurgerActive } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );
  const dispatch = useDispatch();

  const buttonClick = () => {
    if (isBurgerActive) {
      dispatch(toggleBurger());
    }
  };

  return (
    <ul className={styles.navigation}>
      <li className={styles.navigation_item}>
        <Link
          className={styles.navigation_link}
          to="offer"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          onClick={buttonClick}
        >
          Наши программы
        </Link>
      </li>

      <li className={styles.navigation_item}>
        <Link
          className={`${styles.navigation_link} ${styles.special}`}
          to="mailer"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          onClick={buttonClick}
        >
          Связаться с нами
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
