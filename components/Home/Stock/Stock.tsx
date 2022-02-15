import React from "react";
import { IStockInfo } from "@api/graphTypes";

import Item from "./Item";
import styles from "./Stock.module.scss";

interface IStock {
  stock: IStockInfo;
}

const Stock: React.FC<IStock> = ({ stock }) => {
  return (
    <div className={styles.stock}>
      <div className="container">
        <div className={styles.stock_wrapper}>
          <h2 className={styles.stock_title}>{stock.title}</h2>

          <Item stocks={stock.stocks} />
        </div>
      </div>
    </div>
  );
};

export default Stock;
