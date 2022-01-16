import React from "react";
import { useDispatch } from "react-redux";

import { setPopup } from "@store/slices/popup";
import { IPrograms } from "@api/graphTypes";
import styles from "./Programs.module.scss";

const Programs = ({ programs }: { programs: IPrograms[] }) => {
  const styleList = [
    { styles: styles.first, color: "#B53451" },
    { styles: styles.second, color: "#D3529A" },
    { styles: styles.third, color: "#F7D969" },
    { styles: styles.fourth, color: "#D8603E" },
    { styles: styles.fifth, color: "#447CBE" },
    { styles: styles.sixth, color: "#14A4A7" },
  ];

  const renderPrograms = () => {
    const dispatch = useDispatch();

    const clickHandler = (el: IPrograms, color: string) => {
      dispatch(setPopup({ program: el, color: color }));
    };

    return (
      <ul className={styles.programs_list}>
        {programs.map((el, i) => (
          <li className={`${styles.programs_item} ${styleList[i].styles}`}>
            <button
              className={styles.programs_button}
              onClick={() => clickHandler(el, styleList[i].color)}
            >
              <h3 className={styles.programs_title}>{el.title}</h3>

              <p className={styles.programs_info}>{el.info}</p>

              <div className={styles.programs_decorations}>
                <div className={styles.programs_decOne} />

                <div className={styles.programs_decTwo} />
              </div>
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return <div className={styles.programs}>{renderPrograms()}</div>;
};

export default Programs;
