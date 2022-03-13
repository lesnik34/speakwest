import React, { useState } from "react";
import { IReviews } from "@api/graphTypes";

import Item from "./Item";
import styles from "./Reviews.module.scss";
import Popup from "./Popup";

interface IReviewsComponent {
  reviews: IReviews[];
}

const Reviews: React.FC<IReviewsComponent> = ({ reviews }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className={styles.reviews}>
      <div className="container">
        <div className={styles.reviews_wrapper}>
          <div className={styles.reviews_container}>
            <h2 className={styles.reviews_title}>Отзывы</h2>

            <button
              className={styles.reviews_button}
              type="button"
              onClick={() => setVisible(true)}
            >
              +Добавить отзыв
            </button>
          </div>

          <Item reviews={reviews} />
        </div>
      </div>

      {isVisible && <Popup setVisible={setVisible} />}
    </div>
  );
};

export default Reviews;
