import { motion } from 'motion/react';
import BTN_ANIMATION from '../../constants/animations';
import SOCIAL_LINKS from '../../constants/socialLinks';
import css from './SocList.module.css';

export default function SocList() {
  return (
    <nav>
      <ul className={css.list}>
        {SOCIAL_LINKS.map(({ link, icon }, i) => (
          <li key={i}>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
              {...BTN_ANIMATION}
            >
              {icon}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
