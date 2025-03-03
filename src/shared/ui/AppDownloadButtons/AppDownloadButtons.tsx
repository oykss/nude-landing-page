import clsx from 'clsx';
import { motion } from 'motion/react';
import {
	downloadAppStore1x,
	downloadAppStore2x,
	getItOnGooglePlay1x,
	getItOnGooglePlay2x,
} from '../../../assets';
import css from './AppDownloadButtons.module.css';

const btnAppDownloadAnimation = {
	initial: {
		y: 0,
		transition: { duration: 0.2 },
	},
	whileHover: { transition: { duration: 0.2 } },
	whileFocus: { transition: { duration: 0.2 } },
	whileTap: { y: 2, transition: { duration: 0.1 } },
	transition: { type: 'tween', ease: 'easeInOut' },
};

export default function AppDownloadButtons({
	className,
}: {
	className?: string;
}) {
	return (
		<div className={clsx(css.wrapper, className)}>
			<motion.a
				href='https://www.apple.com/app-store/'
				target='_blank'
				rel='noopener noreferrer'
				{...btnAppDownloadAnimation}
			>
				<img
					src={downloadAppStore1x}
					srcSet={`${downloadAppStore1x} 1x, ${downloadAppStore2x} 2x`}
					alt='Download on the App Store'
					width={162}
					height={54}
				/>
			</motion.a>
			<motion.a
				href='https://play.google.com/store'
				target='_blank'
				rel='noopener noreferrer'
				{...btnAppDownloadAnimation}
			>
				<img
					src={getItOnGooglePlay1x}
					srcSet={`${getItOnGooglePlay1x} 1x, ${getItOnGooglePlay2x} 2x`}
					alt='Get it on Google Play'
					width={182}
					height={54}
				/>
			</motion.a>
		</div>
	);
}
