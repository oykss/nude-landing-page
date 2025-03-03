import clsx from 'clsx';
import { motion } from 'motion/react';
import BTN_ANIMATION from '../../constants/animations';
import useStore from '../../store/store';
import css from './BtnContactUs.module.css';

export default function BtnContactUs({ className }: { className?: string }) {
	const { openModal } = useStore();
	return (
		<motion.button
			type='button'
			onClick={openModal}
			className={clsx(css.link, className)}
			{...BTN_ANIMATION}
		>
			Contact Us
		</motion.button>
	);
}
