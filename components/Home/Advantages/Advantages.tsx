import React from "react";
import Image from "next/image";
import { IAdvantageInfo } from "@api/graphTypes";

import styles from "./Advantages.module.scss";

const Advantages: React.FC<IAdvantageInfo> = ({ title, advantages }) => {
  return (
    <div className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages_wrapper}>
          {/* <h2 className={styles.advantages_title}>{title}</h2> */}

          <ul className={styles.advantages_list}>
            {advantages.map((el) => (
              <li className={styles.advantages_item} key={el.id}>
                <div className={styles.advantages_iconWrapper}>
                  <Image
                    src={el.icon.url}
                    className={styles.advantages_icon}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt="Иконка программы"
                  />
                </div>

                <h3 className={styles.advantages_elTitle}>{el.title}</h3>

                <p className={styles.advantages_description}>
                  {el.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
