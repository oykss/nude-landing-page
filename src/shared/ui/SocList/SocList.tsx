import { motion } from 'motion/react';
import { BUTTON_PRIMARY_ANIMATION } from '../../constants/animations';
import SOCIAL_LINKS from '../../constants/socialLinks';
import css from './SocList.module.css';

export default function SocList() {
	return (
		<nav>
			<ul className={css.list}>
				{SOCIAL_LINKS.map(({ link, icon }, i) => (
					<li key={i}>
						<motion.a
							href={link}
							target='_blank'
							rel='noopener noreferrer'
							className={css.link}
							aria-label='Social link'
							{...BUTTON_PRIMARY_ANIMATION}
						>
							{icon}
						</motion.a>
					</li>
				))}
			</ul>
		</nav>
	);
}
