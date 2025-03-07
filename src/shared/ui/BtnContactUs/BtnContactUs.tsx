import clsx from 'clsx';
import { motion } from 'motion/react';
import { BUTTON_PRIMARY_ANIMATION } from '../../constants/animations';
import { useOpenModal } from '../../store/modalContactSlice/state';
import css from './BtnContactUs.module.css';

export default function BtnContactUs({ className }: { className?: string }) {
	const openModal = useOpenModal();

	return (
		<motion.button
			type='button'
			onClick={openModal}
			className={clsx(css.link, className)}
			{...BUTTON_PRIMARY_ANIMATION}
		>
			Contact Us
		</motion.button>
	);
}
