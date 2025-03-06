import clsx from 'clsx';
import type { ReactNode } from 'react';
import Animated from '../Animated';
import css from './Container.module.css';

type PropsContainer = {
	children: ReactNode;
	className?: string;
	animation?: Record<string, unknown>;
};

export default function Container({
	children,
	className,
	animation = {},
}: PropsContainer) {
	return (
		<Animated className={clsx(css.container, className)} animation={animation}>
			{children}
		</Animated>
	);
}
