import { AnimatePresence, motion } from 'motion/react';
import { MouseEventHandler } from 'react';
import { ContactUs, Container, Navigation, SocList } from '../../shared';
import css from './MobileMenuModal.module.css';

type PropsMobileMenuModal = {
  isMenuOpen: boolean;
  handleToggle: () => void;
};

const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

const modalAnimation = {
  initial: { y: '-100%' },
  animate: { y: 0 },
  exit: { y: '-100%' },
  transition: { duration: 0.4 },
};

export default function MobileMenuModal({
  isMenuOpen,
  handleToggle,
}: PropsMobileMenuModal) {
  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLElement;

    if (!target.closest('[data-modal]') || target.nodeName === 'A') {
      handleToggle();
    }
  };

  return (
    <AnimatePresence initial={false}>
      {isMenuOpen ? (
        <motion.div
          className={css.overlay}
          onClick={handleClick}
          {...overlayAnimation}
        >
          <motion.div className={css.modal} {...modalAnimation} data-modal>
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
