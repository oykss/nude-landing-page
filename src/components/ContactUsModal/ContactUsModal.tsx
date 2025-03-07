import { AnimatePresence, motion } from 'motion/react';
import { IoIosArrowBack } from 'react-icons/io';
import {
	BUTTON_PRIMARY_ANIMATION,
	FADE_ANIMATION,
	RIGHT_ANIMATION,
	useCloseModal,
	useIsOpen,
	useMediaPoints,
} from '../../shared';
import ContactForm from './ContactForm/ContactForm';
import css from './ContactUsModal.module.css';
import PhonesSlider from './PhonesSlider/PhonesSlider';

export default function ContactUsModal() {
	const isOpen = useIsOpen();
	const closeModal = useCloseModal();
	const { isMobile } = useMediaPoints();

	return (
		<AnimatePresence initial={false}>
			{isOpen ? (
				<motion.div
					className={css.overlay}
					onClick={closeModal}
					{...FADE_ANIMATION}
				>
					<div className={css.modal} onClick={e => e.stopPropagation()}>
						<div className={css.formWrap}>
							<motion.button
								type='button'
								onClick={closeModal}
								className={css.btnBack}
								{...BUTTON_PRIMARY_ANIMATION}
								{...FADE_ANIMATION}
								transition={{ delay: 0.4 }}
							>
								<IoIosArrowBack size={16} color='#3e3e42' />
								Back
							</motion.button>
							<ContactForm />
						</div>
						{isMobile && (
							<motion.div {...RIGHT_ANIMATION}>
								<PhonesSlider />
							</motion.div>
						)}
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
