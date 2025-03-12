import { motion } from 'motion/react';
import {
  Animated,
  Container,
  FADE_LEFT_ANIMATION_VP,
  FADE_RIGHT_ANIMATION_VP,
} from '../../shared';
import HOW_NUDE_HELPS from './constant';
import css from './HowNudeHelps.module.css';

export default function HowNudeHelps() {
  return (
    <section className={css.howNudeHelps}>
      <Container>
        <Animated as='h2' className={css.title}>
          So how can Nude help you?
        </Animated>
        <Animated as='p' className={css.titleDesc}>
          Here are some of the many things our app can do for you.
        </Animated>
        <ul className={css.list}>
          {HOW_NUDE_HELPS.map(({ img, title, desc }, i) => (
            <li key={i} className={css.item}>
              <motion.img
                className={css.image}
                src={img['1x']}
                srcSet={`${img['1x']} 1x, ${img['2x']} 2x`}
                alt={title}
                width={280}
                height={526}
                {...(i % 2 === 0
                  ? FADE_LEFT_ANIMATION_VP
                  : FADE_RIGHT_ANIMATION_VP)}
              />
              <Animated className={css.wrap}>
                <h3 className={css.subtitle}>{title}</h3>
                <p className={css.desc}>{desc}</p>
              </Animated>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
