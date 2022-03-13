import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IReviews, ERating } from "@api/graphTypes";
import { RootState } from "@store/.";
import starIcon from "@assets/svg/star.svg";
import emptyStarIcon from "@assets/svg/empty_star.svg";
import Image from "next/image";

import styles from "./Item.module.scss";

interface IItem {
  reviews: IReviews[];
}

const Item: React.FC<IItem> = ({ reviews }) => {
  const { isDesktop } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  const stars = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  } as any;

  const getIcon = (e: ERating, i: number) => {
    return stars[e] >= i + 1 ? starIcon : emptyStarIcon;
  };

  return (
    <div className={styles.item}>
      <Splide
        options={{
          gap: "1rem",
          rewind: true,
          perPage: isDesktop ? 3 : 1,
          padding: { left: 10, right: 10 },
        }}
      >
        {reviews.map((el) => {
          return (
            <SplideSlide key={el.id}>
              <div className={styles.item_wrapper}>
                <div className={styles.item_container}>
                  <h3 className={styles.item_name}>{el.name}</h3>

                  <ul className={styles.item_list}>
                    {new Array(5).fill(0).map((_, i) => (
                      <li className={styles.item_item} key={i}>
                        <Image
                          src={getIcon(el.rating, i)}
                          className={styles.item_icon}
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                          alt="Звезда рейтинга"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={styles.item_review}>{el.review}</p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Item;
