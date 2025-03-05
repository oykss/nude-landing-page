import { motion } from 'motion/react';
import { BUTTON_PRIMARY_ANIMATION } from '../../constants/animations';
import NAVIGATION from '../../constants/navigation';
import css from './Navigation.module.css';

export default function Navigation({ className }: { className?: string }) {
	return (
		<nav>
			<ul className={className}>
				{NAVIGATION.map(({ label, path }, i) => (
					<li key={i}>
						<motion.a
							href={path}
							className={css.link}
							{...BUTTON_PRIMARY_ANIMATION}
						>
							{label}
						</motion.a>
					</li>
				))}
			</ul>
		</nav>
	);
}
