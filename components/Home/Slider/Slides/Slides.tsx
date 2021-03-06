import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { RootState } from "@store/.";
import { ISlideInfo } from "@api/graphTypes";
import styles from "./Slides.module.scss";

interface ISlides {
  slides: ISlideInfo[];
  mode?: "small" | "full";
}

const Slides: React.FC<ISlides> = ({ slides, mode = "small" }) => {
  const { isDesktop } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  return mode === "small" ? (
    <div className={styles.mobile}>
      <Splide
        options={{
          gap: "1rem",
          rewind: true,
          perPage: isDesktop ? 3 : 1,
          padding: { left: 10, right: 10 },
        }}
      >
        {slides.map((el) => {
          return (
            <SplideSlide key={el.id}>
              <div
                className={styles.mobile_elWrapper}
                // style={{ backgroundImage: `url(${el.background.url})` }}
              >
                <p className={styles.mobile_description}>{el.description}</p>

                <div className={styles.mobile_wrapper}>
                  <div className={styles.mobile_iconWrapper}>
                    <Image
                      src={el.icon.url}
                      className={styles.mobile_icon}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt="Иконка программы"
                    />
                  </div>

                  <div className={styles.mobile_info}>
                    <h4 className={styles.mobile_title}>{el.title}</h4>

                    <span className={styles.mobile_subTitle}>
                      {el.subTitle}
                    </span>
                  </div>
                </div>

                <Image
                  className={styles.mobile_background}
                  src={el.background.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Фон программы"
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  ) : (
    <div></div>
  );
};

export default Slides;
