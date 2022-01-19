import React from "react";

import { ISliderInfo } from "@api/graphTypes";

import styles from "./Slider.module.scss";
import Slides from "./Slides";

interface ISlider {
  slider: ISliderInfo;
}

const Slider: React.FC<ISlider> = ({ slider }) => {
  return (
    <div className={styles.slider}>
      <div className="container">
        <div className={styles.slider_wrapper}>
          <h2 className={styles.slider_title}>{slider.title}</h2>

          <p className={styles.slider_description}>{slider.description}</p>

          <Slides slides={slider.slides} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
