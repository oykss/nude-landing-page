import { motion } from 'motion/react';
import { Animated, AppDownloadButtons, Container } from '../../shared';
import BrandList from './BrandList/BrandList';
import css from './Hero.module.css';
import HeroMedia from './HeroMedia/HeroMedia';

const leftSlideAnimation = {
	animation: {
		initial: { x: -50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		viewport: { once: true },
	},
	variants: (delay: number) => ({
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { delay } },
	}),
};

const rightSlideAnimation = {
	animation: {
		initial: { x: 50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		viewport: { once: true },
	},
	variants: (delay: number) => ({
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { delay } },
	}),
};

export default function Hero() {
	return (
		<motion.section
			className={css.hero}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Container className={css.container}>
				<HeroMedia />
				<div className={css.infoWrap}>
					<Animated as='h1' className={css.title}>
						Start building your first home deposit today
					</Animated>

					<Animated
						as='p'
						className={css.text}
						animation={rightSlideAnimation.animation}
						variants={rightSlideAnimation.variants(0.1)}
					>
						Open a Nude savings or investment account, boost your deposit with
						government bonuses and get ideas to buy your home in record time.
					</Animated>

					<Animated
						as='p'
						className={css.text}
						animation={leftSlideAnimation.animation}
						variants={leftSlideAnimation.variants(0.2)}
					>
						Already got a Lifetime ISA? Transferring to Nude only takes 5
						minutes.
					</Animated>
					<Animated
						as='p'
						className={css.text}
						animation={leftSlideAnimation.animation}
						variants={leftSlideAnimation.variants(0.3)}
					>
						Install Nude today and start the countdown to buying your first
						place.
					</Animated>
					<AppDownloadButtons className={css.btnsWrap} />
					<BrandList />
				</div>
			</Container>
		</motion.section>
	);
}
