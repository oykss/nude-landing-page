import { AnimatePresence } from 'motion/react';
import { lazy, Suspense, useState } from 'react';
import { RiCloseLargeFill, RiMenu3Fill } from 'react-icons/ri';
import {
	Animated,
	ContactUs,
	Container,
	Logo,
	Navigation,
	useMediaPoints,
} from '../../shared';
import css from './Header.module.css';

const MobileMenuModal = lazy(
	() => import('../MobileMenuModal/MobileMenuModal')
);

const btnMenuAnimation = {
	initial: { opacity: 0, y: 2 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 2 },
	whileHover: { opacity: 0.8 },
	whileFocus: { opacity: 0.8 },
	transition: { duration: 0.2 },
};

export default function Header() {
	const { isMobile } = useMediaPoints();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<>
			<header className={css.header}>
				<Container className={css.container}>
					<button
						type='button'
						onClick={() => {
							if (isMenuOpen) closeMenu();
						}}
					>
						<Logo />
					</button>
					{isMobile ? (
						<>
							<Navigation className={css.list} />
							<ContactUs />
						</>
					) : (
						<button
							type='button'
							onClick={isMenuOpen ? closeMenu : openMenu}
							className={css.btnMenu}
							aria-label='Menu button'
						>
							<AnimatePresence mode='wait'>
								<Animated
									key={isMenuOpen ? 'close' : 'menu'}
									animation={btnMenuAnimation}
								>
									{isMenuOpen ? (
										<RiCloseLargeFill color='#3e3e42' size={24} />
									) : (
										<RiMenu3Fill color='#3e3e42' size={24} />
									)}
								</Animated>
							</AnimatePresence>
						</button>
					)}
				</Container>
			</header>
			<Suspense fallback={null}>
				<MobileMenuModal closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
			</Suspense>
		</>
	);
}
