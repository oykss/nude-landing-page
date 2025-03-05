export const BUTTON_PRIMARY_ANIMATION = {
	initial: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.2 },
	},
	whileHover: { opacity: 0.8, transition: { duration: 0.2 } },
	whileFocus: { opacity: 0.8, transition: { duration: 0.2 } },
	whileTap: { opacity: 0.9, y: 2, transition: { duration: 0.1 } },
	transition: { type: 'tween', ease: 'easeInOut' },
};

export const FADE_ANIMATION = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.2 },
};

export const DOWN_ANIMATION = {
	initial: { y: '-100%' },
	animate: { y: 0 },
	exit: { y: '-100%' },
	transition: { duration: 0.4 },
};

export const RIGHT_ANIMATION = {
	initial: { x: '100%' },
	animate: { x: 0 },
	exit: { x: '100%' },
	transition: { duration: 0.4 },
};
