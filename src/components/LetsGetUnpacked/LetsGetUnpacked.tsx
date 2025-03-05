import { MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from '../../shared';
import css from './LetsGetUnpacked.module.css';

export default function LetsGetUnpacked() {
	return (
		<section className={css.letsGetUnpacked}>
			<Container>
				<a href='#' className={css.btn}>
					Find out more
					<MdKeyboardArrowRight size={20} />
				</a>
				<h2 className={css.title}>Let's get you unpacked</h2>
			</Container>
		</section>
	);
}
