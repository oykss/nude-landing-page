import { Animated, Container } from '../../shared';
import css from './LisaAndIsa.module.css';

export default function LisaAndIsa() {
	return (
		<section className={css.section}>
			<Container>
				<Animated as='p' className={css.letter}>
					Hey, here are some important things you should know 👋 <br />
					<strong>
						Our investing products (e.g. Nude Stocks & Shares LISA and ISA)
					</strong>
					<br />
					If you open a Nude Stocks & Shares Lifetime ISA, it’s important that
					you know the value of your investment could go up as well as down. You
					could get back less than you put in, which means it would take you
					longer to buy your first home. Past performance is not necessarily a
					guide to the future and investing is not intended to be a short-term
					option. We can’t and don’t provide financial advice so please be sure
					that investment risk is right for you. <br />
					<strong>Our LISA and ISA</strong> <br />
					The 25% bonus and tax-free benefits of these accounts depend on
					government policy and tax rules, which can change at any time.
					<br />
					<strong>Market-leading interest rate</strong> The term market-leading
					interest rate is based on our research as at 03/11/2022.
				</Animated>
				<p className={css.copyright}>
					Copyright © Nude Finance Limited - 2022. All rights reserved.
				</p>
				<Animated as='p' className={css.police}>
					Nude is a trading name of Nude Finance Limited, which is authorised
					and regulated by the Financial Conduct Authority (FRN: 928010) and
					registered as an account information services provider (FRN: 913654).
					We are a private limited company registered at c/o CMS Cameron
					Mckenna, Cannon Place, 78 Cannon Street, London EC4N 6AF, with
					registration number 12008146. Nude is a registered trade mark of Nude
					Finance Limited (12008146) (TM Reg No UK00003263387).We use cookies on
					this site — some are for statistics and others are set up by
					third-party services.
				</Animated>
			</Container>
		</section>
	);
}
