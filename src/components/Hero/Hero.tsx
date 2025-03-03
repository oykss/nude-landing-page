import { AppDownloadButtons, Container } from '../../shared';
import BrandList from './BrandList/BrandList';
import css from './Hero.module.css';
import HeroMedia from './HeroMedia/HeroMedia';

export default function Hero() {
	return (
		<section className={css.hero}>
			<Container className={css.container}>
				<HeroMedia />
				<div className={css.infoWrap}>
					<h1 className={css.title}>
						Start building your first home deposit today
					</h1>
					<p className={css.text}>
						Open a Nude savings or investment account, boost your deposit with
						government bonuses and get ideas to buy your home in record time.
					</p>
					<p className={css.text}>
						Already got a Lifetime ISA? Transferring to Nude only takes 5
						minutes.
					</p>
					<p className={css.text}>
						Install Nude today and start the countdown to buying your first
						place.
					</p>
					<AppDownloadButtons className={css.btnsWrap} />
					<BrandList />
				</div>
			</Container>
		</section>
	);
}
