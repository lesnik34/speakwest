import React from "react";
import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-scroll";

import { RootState } from "@store/.";
import styles from "./Hero.module.scss";
import { scrollPageToPoint } from "@utils/helpers";

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

          <Link
            className={styles.hero_button}
            to="mailer"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Бесплатное занятие
          </Link>
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
