import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { CSSTransition } from "react-transition-group";

import Navigation from "@components/Global/Navigation";
import { toggleBurger } from "@store/slices/global";
import { RootState } from "@store/.";

import styles from "./Burger.module.scss";

const Burger = () => {
  const dispatch = useDispatch();
  const { isBurgerActive } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  const burgerClick = () => {
    dispatch(toggleBurger());
  };

  useEffect(() => {
    if (isBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerActive]);

  return (
    <>
      <CSSTransition
        in={isBurgerActive}
        classNames={{
          enterActive: styles["anim-enter"],
          enterDone: styles["anim-enter-done"],
          exitActive: styles["anim-exit"],
          exitDone: styles["anim-exit-done"],
        }}
        timeout={{
          enter: 800,
          exit: 800,
        }}
      >
        <div className={styles.menu_container}>
          <button
            type="button"
            aria-label="Открыть или закрыть меню"
            className={`${styles.burger} ${
              isBurgerActive ? styles.active : ""
            }`}
            onClick={burgerClick}
          >
            <div className={`${styles.burger_line} ${styles.one}`} />
            <div className={`${styles.burger_line} ${styles.two}`} />
            <div className={`${styles.burger_line} ${styles.three}`} />
          </button>

          <div className={styles.menu}>
            <div className="container">
              <div className={styles.menu_wrapper}>
                <Navigation />
              </div>
            </div>
          </div>

          {isBurgerActive && (
            <div className={styles.menu_overlay} onClick={burgerClick} />
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default Burger;
