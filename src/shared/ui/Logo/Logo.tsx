import { BOUNCE } from '../../constants/animations';
import Animated from '../Animated';
import css from './Logo.module.css';

export default function Logo({ className }: { className?: string }) {
	return (
		<Animated className={className} animation={BOUNCE}>
			<a href='/' className={css.logo}>
				Nude<span className={css.accent}>&#174;</span>
			</a>
		</Animated>
	);
}
