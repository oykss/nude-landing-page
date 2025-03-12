import { Animated } from '../../../shared';
import css from './BrandList.module.css';
import BRAND_LIST from './constant';

export default function BrandList() {
  return (
    <ul className={css.list}>
      {BRAND_LIST.map(({ icon, alt }, i) => (
        <Animated
          as='li'
          key={i}
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 0.15 * i } },
          }}
        >
          <img src={icon} alt={alt} />
        </Animated>
      ))}
    </ul>
  );
}
