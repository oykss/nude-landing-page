import { AnimatePresence, motion } from 'motion/react';
import {
  givingAway1x,
  givingAway2x,
  phone0_1x,
  phone0_2x,
  stain1x,
  video1x,
  video2x,
} from '../../../assets';
import { useMediaPoints } from '../../../shared';
import css from './HeroMedia.module.css';

export default function HeroMedia() {
  const { isMobile } = useMediaPoints();

  return (
    <AnimatePresence initial={true}>
      <motion.div className={css.wrap} initial='hidden' animate='visible'>
        {isMobile && (
          <div className={css.imgWrap}>
            <motion.img
              className={css.givingAway}
              src={givingAway1x}
              srcSet={`${givingAway1x} 1x, ${givingAway2x} 2x`}
              alt='Giving away promotion image'
              width={240}
              height={221}
              variants={{
                hidden: { y: -50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
              }}
            />
            <motion.div
              className={css.videoWrap}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { delay: 0.3 } },
              }}
            >
              <img
                className={css.stain}
                src={stain1x}
                alt='Decorative stain background'
                width={347}
                height={364}
              />
              <a
                href='https://youtu.be/eayImZxG-mk?si=E1iw98c85X7kTb7M'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className={css.video}
                  src={video1x}
                  srcSet={`${video1x} 1x, ${video2x} 2x`}
                  alt='Video preview thumbnail'
                  width={194}
                  height={152}
                />
                <p>
                  Watch: Nude in <br /> under 2 mins
                </p>
              </a>
            </motion.div>
          </div>
        )}
        <motion.img
          className={css.phone}
          src={phone0_1x}
          srcSet={`${phone0_1x} 1x, ${phone0_2x} 2x`}
          alt='Download on the App Store'
          width={289}
          height={584}
          variants={{
            hidden: { x: 50, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 0.4 } },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
