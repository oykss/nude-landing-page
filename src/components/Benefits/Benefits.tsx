import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Animated, Container, UP_ANIMATION_VP } from '../../shared';
import css from './Benefits.module.css';
import BENEFITS from './constant';

export default function Benefits() {
	return (
		<Animated as='section' className={css.benefits}>
			<Container className={css.container} animation={UP_ANIMATION_VP}>
				<h2 className='visually-hidden'>Benefits</h2>
				<Swiper
					className={css.swiper}
					modules={[Autoplay]}
					slidesPerView={1}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{
						768: { slidesPerView: 2 },
						1280: { slidesPerView: 3, loop: false },
					}}
				>
					{BENEFITS.map(({ icon, title, desc, color }, i) => (
						<SwiperSlide key={i} className={css.slide}>
							<div className={css.iconWrap} style={{ backgroundColor: color }}>
								{icon}
							</div>
							<div className={css.infoWrap}>
								<h3 className={css.title}>{title}</h3>
								<p className={css.desc}>{desc}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Animated>
	);
}
