const BTN_ANIMATION = {
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

export default BTN_ANIMATION;
