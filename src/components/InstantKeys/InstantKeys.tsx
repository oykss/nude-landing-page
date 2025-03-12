import { Animated, AppDownloadButtons, Container } from '../../shared';
import css from './InstantKeys.module.css';

export default function InstantKeys() {
  return (
    <section className={css.instantKeys}>
      <Container className={css.container}>
        <Animated as='h2' className={css.title}>
          You’ll have the keys in no time
        </Animated>
        <Animated as='p' className={css.desc}>
          Install Nude today and start the countdown to buying your first place.
        </Animated>
        <AppDownloadButtons className={css.btnsWrap} />
      </Container>
    </section>
  );
}
