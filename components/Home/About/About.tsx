import React from "react";
import { shallowEqual, useSelector } from "react-redux";

import LinesMobile from "@assets/jsx/LinesMobile";
import LinesDesktop from "@assets/jsx/LinesDesktop";
import styles from "./About.module.scss";
import { RootState } from "@store/.";

interface IAbout {
  title: string;
  description: string;
}

const About: React.FC<IAbout> = ({ title, description }) => {
  const { isMobile } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.about_wrapper}>
          <div className={styles.about_info}>
            <h2 className={styles.about_title}>{title}</h2>

            <p className={styles.about_description}>{description}</p>
          </div>

          <div className={styles.about_linesWrapper}>
            {isMobile ? (
              <LinesMobile
                className={{
                  wrapper: styles.about_lineMobile,
                  lineOne: styles.line_one,
                  lineTwo: styles.line_two,
                }}
              />
            ) : (
              <LinesDesktop
                className={{
                  wrapper: styles.about_lineDesktop,
                  lineOne: styles.line_one,
                  lineTwo: styles.line_two,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
