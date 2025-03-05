import { AnimatePresence, motion } from 'motion/react';
import { MouseEventHandler } from 'react';
import {
	ContactUs,
	Container,
	DOWN_ANIMATION,
	FADE_ANIMATION,
	Navigation,
	SocList,
} from '../../shared';
import css from './MobileMenuModal.module.css';

type PropsMobileMenuModal = {
	isMenuOpen: boolean;
	handleToggle: () => void;
};

export default function MobileMenuModal({
	isMenuOpen,
	handleToggle,
}: PropsMobileMenuModal) {
	const handleClick: MouseEventHandler<HTMLDivElement> = e => {
		const target = e.target as HTMLElement;

		if (
			!target.closest('[data-modal]') ||
			['A', 'BUTTON'].includes(target.nodeName)
		) {
			handleToggle();
		}
	};

	return (
		<AnimatePresence initial={false}>
			{isMenuOpen ? (
				<motion.div
					className={css.overlay}
					onClick={handleClick}
					{...FADE_ANIMATION}
				>
					<motion.div className={css.modal} {...DOWN_ANIMATION} data-modal>
						<Container>
							<Navigation className={css.list} />
							<div className={css.wrapper}>
								<SocList />
								<ContactUs />
							</div>
						</Container>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
