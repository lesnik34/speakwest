import React from "react";
import { IPrograms } from "@api/graphTypes";

import Programs from "@components/Home/Programs";
import styles from "./Offer.module.scss";

interface IOffer {
  title: string;
  programs: IPrograms[];
}

const Offer: React.FC<IOffer> = ({ title, programs }) => {
  return (
    <div className={styles.offer} id="offer">
      <div className="container">
        <div className={styles.offer_wrapper}>
          <h2 className={styles.offer_title}>{title}</h2>

          <div className={styles.offer_programs}>
            <Programs programs={programs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
