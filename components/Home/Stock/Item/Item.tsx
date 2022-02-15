import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { IStock } from "@api/graphTypes";
import { RootState } from "@store/.";

import styles from "./Item.module.scss";

interface IItem {
  stocks: IStock[];
}

const Item: React.FC<IItem> = ({ stocks }) => {
  const { isDesktop } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  const getGradient = (colors: { hex: string }[]) => {
    switch (colors.length) {
      case 0:
        return "linear-gradient(105.37deg, #13AACC 3.2%, #6BD5ED 29.66%, #25859A 102.83%)";
      case 1:
        return colors[0].hex;
      case 2:
        return `linear-gradient(105.37deg, ${colors[0].hex} 3.2%, ${colors[1].hex} 102.83%)`;
      case 3:
        return `linear-gradient(105.37deg, ${colors[0].hex} 3.2%, ${colors[1].hex} 29.66%, ${colors[2].hex} 102.83%)`;
    }
  };

  return (
    <div className={styles.item}>
      <Splide
        options={{
          gap: "1rem",
          rewind: true,
          perPage: isDesktop ? 3 : 1,
        }}
      >
        {stocks.map((el) => {
          return (
            <SplideSlide key={el.id}>
              <div
                className={styles.item_wrapper}
                style={{ background: getGradient(el.colors) }}
              >
                <div className={styles.item_container}>
                  <p className={styles.item_description}>{el.description}</p>

                  <span className={styles.item_title}>{el.title}</span>

                  <div className={styles.item_iconWrapper}>
                    <Image
                      src={el.icon.url}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt="Иконка акции"
                    />
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}

        <SplideSlide>
          <div className={styles.item_defWrapper}>
            <span className={styles.item_defTitle}>Дальше больше</span>

            <p className={styles.item_defDescription}>
              Здесь будет появляться больше новостей и акций
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Item;
