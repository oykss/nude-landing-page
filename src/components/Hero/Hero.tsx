import { AppDownloadButtons, Container } from '../../shared';

export default function Hero() {
  return (
    <section>
      <Container>
        <div>
          <h1>Start building your first home deposit today</h1>
          <p>
            Open a Nude savings or investment account, boost your deposit with
            government bonuses and get ideas to buy your home in record time.
          </p>
          <p>
            Already got a Lifetime ISA? Transferring to Nude only takes 5
            minutes.
          </p>
          <p>
            Install Nude today and start the countdown to buying your first
            place.
          </p>
          <AppDownloadButtons />
        </div>
      </Container>
    </section>
  );
}
