import { ContactUs, Container, Logo, Navigation, SocList } from '../../shared';
import css from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={css.footer}>
			<Container className={css.container}>
				<Logo className={css.logo} />
				<Navigation className={css.navigation} />
				<div className={css.btnsWrap}>
					<ContactUs />
					<SocList />
				</div>
			</Container>
		</footer>
	);
}
