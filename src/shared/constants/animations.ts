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
  initial: { y: -50 },
  animate: { y: 0 },
  exit: { y: -50 },
  transition: { duration: 0.4 },
};

export const RIGHT_ANIMATION = {
  initial: { x: 50 },
  animate: { x: 0 },
  exit: { x: 50 },
  transition: { duration: 0.4 },
};

export const UP_ANIMATION_VP = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
  viewport: { once: true, amount: 0.2 },
};

export const LEFT_ANIMATION_VP = {
  initial: { x: -50 },
  whileInView: { x: 0 },
  transition: { duration: 0.3 },
  viewport: { once: true, amount: 0.2 },
};

export const FADE_LEFT_ANIMATION_VP = {
  initial: { x: -50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.3 },
  viewport: { once: true, amount: 0.2 },
};

export const FADE_RIGHT_ANIMATION_VP = {
  initial: { x: 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.3 },
  viewport: { once: true, amount: 0.2 },
};

export const BOUNCE = {
  initial: { opacity: 1, scale: 1 },
  whileHover: { scale: 1.05 },
  whileFocus: { scale: 1.05 },
  whileTap: { opacity: 0.9, scale: 0.95 },
  transition: { duration: 0.5, type: 'spring', bounce: 0.5 },
};
