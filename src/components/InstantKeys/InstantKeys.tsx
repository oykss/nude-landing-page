import { AppDownloadButtons, Container } from '../../shared';
import css from './InstantKeys.module.css';

export default function InstantKeys() {
	return (
		<section className={css.instantKeys}>
			<Container className={css.container}>
				<h2 className={css.title}>You’ll have the keys in no time</h2>
				<p className={css.desc}>
					Install Nude today and start the countdown to buying your first place.
				</p>
				<AppDownloadButtons className={css.btnsWrap} />
			</Container>
		</section>
	);
}
