import React, { FC } from "react";
import IonIcon from "@reacticons/ionicons";
import styles from "./BannerLeft.module.css";

interface Props {
  title: string;
}

const BannerLeft: FC<Props> = ({ title }) => {
  return (
    <div className={styles.banner_left}>
      <div className={styles.banner_features}>
        <div className={styles.banner_rating}>
          <span className={styles.banner_score}>8.9</span>
          <div className={styles.banner_content}>
            <span className={styles.banner_subtitle}>Lorem, ipsum dolor.</span>
            <h4>Awesome</h4>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className={styles.banner_pricing}>
          <IonIcon name="add-outline" />
          <div className={styles.banner_content}>
            <span className={styles.banner_subtitle}>Lorem, ipsum dolor.</span>
            <h4>Order now</h4>
            <span>Lorem ipsum</span>
          </div>
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default BannerLeft;
