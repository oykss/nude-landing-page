import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PHONES_IMAGES from './constant';
import css from './PhonesSlider.module.css';

export default function PhonesSlider() {
  return (
    <Swiper
      className={css.swiper}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {PHONES_IMAGES.map((img, i) => (
        <SwiperSlide key={`${img['1x']}-${i}`} className={css.slide}>
          <img
            className={css.image}
            src={img['1x']}
            srcSet={`${img['1x']} 1x, ${img['2x']} 2x`}
            alt='Phone image'
            width={240}
            height={450}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
