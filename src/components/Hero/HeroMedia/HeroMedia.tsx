import {
	givingAway1x,
	givingAway2x,
	phone0_1x,
	phone0_2x,
	stain1x,
	stain2x,
	video1x,
	video2x,
} from '../../../assets';
import { useScreen } from '../../../shared';
import css from './HeroMedia.module.css';

export default function HeroMedia() {
	const { isMobile } = useScreen();
	return (
		<div className={css.wrap}>
			{isMobile && (
				<div className={css.imgWrap}>
					<img
						className={css.givingAway}
						src={givingAway1x}
						srcSet={`${givingAway1x} 1x, ${givingAway2x} 2x`}
						alt='Download on the App Store'
						width={240}
						height={221}
					/>
					<div className={css.videoWrap}>
						<img
							className={css.stain}
							src={stain1x}
							srcSet={`${stain1x} 1x, ${stain2x} 2x`}
							alt='Download on the App Store'
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
								alt='Download on the App Store'
								width={194}
								height={152}
							/>
							<p>
								Watch: Nude in <br /> under 2 mins
							</p>
						</a>
					</div>
				</div>
			)}
			<img
				className={css.phone}
				src={phone0_1x}
				srcSet={`${phone0_1x} 1x, ${phone0_2x} 2x`}
				alt='Download on the App Store'
				width={289}
				height={584}
			/>
		</div>
	);
}
