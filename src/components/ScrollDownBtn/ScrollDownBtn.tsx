import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FADE_ANIMATION } from '../../shared';
import css from './ScrollDownBtn.module.css';

export default function ScrollDownBtn() {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerHeight > window.scrollY) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToBottom = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		isVisible && (
			<motion.button
				className={css.btn}
				onClick={scrollToBottom}
				{...FADE_ANIMATION}
			>
				<MdKeyboardArrowUp size={36} color='#fdf7f0' />
			</motion.button>
		)
	);
}
