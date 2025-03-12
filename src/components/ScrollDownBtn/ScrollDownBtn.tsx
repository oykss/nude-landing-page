import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BOUNCE, FADE_ANIMATION, useMediaPoints } from '../../shared';
import css from './ScrollDownBtn.module.css';

export default function ScrollDownBtn() {
  const { isMobile } = useMediaPoints();
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
        type='button'
        className={css.btn}
        onClick={scrollToBottom}
        {...BOUNCE}
        {...FADE_ANIMATION}
      >
        <MdKeyboardArrowUp size={isMobile ? 52 : 40} color='#fdf7f0' />
      </motion.button>
    )
  );
}
