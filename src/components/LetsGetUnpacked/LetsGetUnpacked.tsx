import { MdKeyboardArrowRight } from 'react-icons/md';
import { Animated, Container, LEFT_ANIMATION_VP } from '../../shared';
import css from './LetsGetUnpacked.module.css';

export default function LetsGetUnpacked() {
  return (
    <Animated
      as='section'
      className={css.letsGetUnpacked}
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Animated
          as='a'
          href='#'
          className={css.btn}
          animation={LEFT_ANIMATION_VP}
        >
          Find out more
          <MdKeyboardArrowRight size={20} />
        </Animated>
        <Animated as='h2' className={css.title}>
          Let's get you unpacked
        </Animated>
      </Container>
    </Animated>
  );
}
