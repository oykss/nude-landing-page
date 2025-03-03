import BRAND_LIST from './constant';
import css from './BrandList.module.css';

export default function BrandList() {
	return (
		<ul className={css.list}>
			{BRAND_LIST.map(({ icon, alt }, i) => (
				<li key={i}>
					<img src={icon} alt={alt} />
				</li>
			))}
		</ul>
	);
}
