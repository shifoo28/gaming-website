import React from "react";
import styles from "./Slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SliderButtons from "./SliderButtons";
import { movies } from "../../data/movies";
import BannerLeft from "./Left";
import BannerRight from "./Right";

const Slider = () => {
  return (
    <Swiper
      className={styles.swiper}
      slidesPerView={1}
      loop={true}
      pagination={{
        el: ".swiper_pagination",
        clickable: true,
        renderBullet: () =>
          `<span class="swiper-pagination-bullet ${styles.swiper_pagination_bullet}"></span>`,
      }}
      modules={[Pagination]}
    >
      {movies.map((movie, index) => {
        return (
          <SwiperSlide className={styles.swiper_slide} key={index}>
            <img src={movie.imgBackground} alt="" />
            <div
              className={styles.swiper_backscene}
              style={{ background: movie.bgColor }}
            ></div>
            <div className={styles.swiper_banner}>
              <BannerLeft title={movie.title} />
              <img src={movie.imgCharacter} alt="" />
              <BannerRight />
            </div>
          </SwiperSlide>
        );
      })}
      <SliderButtons />
      <div className={styles.swiper_pagination + " swiper_pagination"}></div>
    </Swiper>
  );
};

export default Slider;
