import { Container } from '../../shared';
import HOW_NUDE_HELPS from './constant';
import css from './HowNudeHelps.module.css';

export default function HowNudeHelps() {
	return (
		<section className={css.howNudeHelps}>
			<Container>
				<h2 className={css.title}>So how can Nude help you?</h2>
				<p className={css.titleDesc}>
					Here are some of the many things our app can do for you.
				</p>
				<ul className={css.list}>
					{HOW_NUDE_HELPS.map(({ img, title, desc }, i) => (
						<li key={i} className={css.item}>
							<img
								className={css.image}
								src={img['1x']}
								srcSet={`${img['1x']} 1x, ${img['2x']} 2x`}
								alt={title}
								width={280}
								height={526}
							/>
							<div className={css.wrap}>
								<h3 className={css.subtitle}>{title}</h3>
								<p className={css.desc}>{desc}</p>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
