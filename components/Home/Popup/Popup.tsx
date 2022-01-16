import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";

import { clearPopup } from "@store/slices/popup";
import { RootState } from "@store/.";
import styles from "./Popup.module.scss";

const Popup = () => {
  const { id, title, description, image, url, color } = useSelector(
    (state: RootState) => state.popup,
    shallowEqual
  );
  const isPopupVisible = !!id;
  const dispatch = useDispatch();

  const backHandler = () => {
    dispatch(clearPopup());
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopupVisible]);

  return (
    <CSSTransition
      in={isPopupVisible}
      unmountOnExit
      mountOnEnter
      classNames={{
        enterActive: styles["anim-enter"],
        enterDone: styles["anim-enter-done"],
        exitActive: styles["anim-exit"],
        exitDone: styles["anime-exit-done"],
      }}
      timeout={{
        enter: 800,
        exit: 0,
      }}
    >
      <div className={styles.popup}>
        <div className={styles.popup_wrapper}>
          {image.url && (
            <div className={styles.popup_imageWrapper}>
              <Image
                className={styles.popup_image}
                src={image.url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )}

          <div className={styles.popup_content}>
            <h3 className={styles.popup_title}>{title}</h3>

            <p className={styles.popup_description}>{description}</p>

            <div className={styles.popup_buttons}>
              <button
                className={styles.popup_back}
                type="button"
                onClick={backHandler}
              >
                Назад на главную
              </button>

              {url && (
                <a
                  className={styles.popup_button}
                  style={{ backgroundColor: color }}
                  href={url}
                  target="_blank"
                >
                  Узнать цену
                </a>
              )}
            </div>
          </div>

          <div
            className={styles.popup_line}
            style={{ backgroundColor: color }}
          />
        </div>

        <div className={styles.popup_overlay} onClick={backHandler} />
      </div>
    </CSSTransition>
  );
};

export default Popup;
