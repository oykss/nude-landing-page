import { motion } from 'motion/react';
import BTN_ANIMATION from '../../constants/animations';
import NAVIGATION from '../../constants/navigation';
import css from './Navigation.module.css';

export default function Navigation({ className }: { className?: string }) {
	return (
		<nav>
			<ul className={className}>
				{NAVIGATION.map(({ label, path }, i) => (
					<li key={i}>
						<motion.a href={path} className={css.link} {...BTN_ANIMATION}>
							{label}
						</motion.a>
					</li>
				))}
			</ul>
		</nav>
	);
}
