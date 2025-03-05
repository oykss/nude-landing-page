import { Container } from '../../shared';
import FTB_ACCOUNTS from './constant';
import css from './FTBAccounts.module.css';

export default function FTBAccounts() {
	return (
		<section className={css.accounts}>
			<Container className={css.titleWrap}>
				<p className={css.titleDesc}>A place to grow your first home fund</p>
				<h2 className={css.title}>Accounts for first-time home buyers</h2>
			</Container>
			<div className={css.container}>
				<ul className={css.list}>
					<Container className={css.listWrap}>
						{FTB_ACCOUNTS.map(({ title, alias, desc }, i) => (
							<li key={i} className={css.item}>
								<h3 className={css.subtitle}>{title}</h3>
								<p className={css.alias}>{alias}</p>
								<p className={css.desc}>{desc}</p>
							</li>
						))}
					</Container>
				</ul>
				<div className={css.btnWrap}>
					<a href='#' className={css.btn}>
						Coming soon
					</a>
				</div>
			</div>
		</section>
	);
}
