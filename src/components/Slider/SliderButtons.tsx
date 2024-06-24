import React, { Fragment } from "react";
import styles from "./Slider.module.css";
import IonIcon from "@reacticons/ionicons";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <Fragment>
      <div
        className={styles.swiper_button_prev}
        onClick={() => swiper.slidePrev()}
      >
        <IonIcon name="chevron-back-outline"/>
      </div>
      <div
        className={styles.swiper_button_next}
        onClick={() => swiper.slideNext()}
      >
        <IonIcon name="chevron-forward-outline" />
      </div>
    </Fragment>
  );
};

export default SliderButtons;
