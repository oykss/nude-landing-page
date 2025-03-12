import { AnimatePresence, motion } from 'motion/react';
import { MouseEventHandler, useEffect } from 'react';
import {
  ContactUs,
  Container,
  DOWN_ANIMATION,
  FADE_ANIMATION,
  Navigation,
  SocList,
  useEscapeClose,
  useMediaPoints,
} from '../../shared';
import css from './MobileMenuModal.module.css';

type PropsMobileMenuModal = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenuModal({
  isMenuOpen,
  closeMenu,
}: PropsMobileMenuModal) {
  const { isMobile } = useMediaPoints();

  useEscapeClose(closeMenu);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMobile && !isMenuOpen) {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isMenuOpen]);

  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLElement;

    if (
      !target.closest('[data-modal]') ||
      ['A', 'BUTTON'].includes(target.nodeName)
    ) {
      closeMenu();
    }
  };

  return (
    !isMobile && (
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
    )
  );
}
