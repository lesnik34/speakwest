import React from "react";
import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

import { RootState } from "@store/.";
import styles from "./Hero.module.scss";

interface IHero {
  title: string;
  description: string;
  image: string;
}

const Hero: React.FC<IHero> = ({ title, description, image }) => {
  const { isDesktop } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.hero_wrapper}>
          <h1 className={styles.hero_title}>{title}</h1>

          <p className={styles.hero_description}>{description}</p>

          <button className={styles.hero_button}>Подробнее</button>
        </div>
      </div>

      {isDesktop && (
        <div className={styles.hero_imageWrapper}>
          <Image
            className={styles.hero_image}
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center 70%"
          />
        </div>
      )}

      <div className={styles.hero_field}>
        <div className={`${styles.hero_figure} ${styles.purple}`} />
        <div className={`${styles.hero_figure} ${styles.orange}`} />
        <div className={`${styles.hero_figure} ${styles.yellow}`} />
        <div className={`${styles.hero_figure} ${styles.green}`} />
        <div className={`${styles.hero_figure} ${styles.red}`} />
      </div>
    </div>
  );
};

export default Hero;
