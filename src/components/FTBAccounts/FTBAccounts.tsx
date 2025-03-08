import { Animated, BUTTON_PRIMARY_ANIMATION, Container } from '../../shared';
import FTB_ACCOUNTS from './constant';
import css from './FTBAccounts.module.css';

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export default function FTBAccounts() {
	return (
		<section className={css.accounts}>
			<Container className={css.titleWrap}>
				<Animated as='p' className={css.titleDesc}>
					A place to grow your first home fund
				</Animated>
				<Animated as='h2' className={css.title}>
					Accounts for first-time home buyers
				</Animated>
			</Container>
			<Animated className={css.container}>
				<Container className={css.listWrap}>
					<Animated
						as='ul'
						className={css.list}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}
					>
						{FTB_ACCOUNTS.map(({ title, alias, desc }, i) => (
							<Animated
								as='li'
								key={i}
								className={css.item}
								variants={textVariants}
								transition={{ duration: 0.5 * i }}
							>
								<h3 className={css.subtitle}>{title}</h3>
								<p className={css.alias}>{alias}</p>
								<p className={css.desc}>{desc}</p>
							</Animated>
						))}
					</Animated>
				</Container>
				<Animated className={css.btnWrap} {...BUTTON_PRIMARY_ANIMATION}>
					<a href='#' className={css.btn}>
						Coming soon
					</a>
				</Animated>
			</Animated>
		</section>
	);
}
