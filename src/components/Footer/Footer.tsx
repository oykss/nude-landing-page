import {
  ContactUs,
  Container,
  Logo,
  Navigation,
  SocList,
  UP_ANIMATION_VP,
} from '../../shared';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container className={css.container} animation={UP_ANIMATION_VP}>
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
