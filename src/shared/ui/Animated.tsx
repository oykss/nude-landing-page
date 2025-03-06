import { motion, MotionProps } from 'motion/react';
import { ElementType, ReactNode } from 'react';
import { UP_ANIMATION_VP } from '../constants/animations';

interface AnimatedProps extends MotionProps {
	as?: ElementType;
	children: ReactNode;
	animation?: MotionProps;
	className?: string;
	href?: string;
}

export default function Animated({
	as: Component = 'div',
	children,
	animation = UP_ANIMATION_VP,
	className,
	href,
	...props
}: AnimatedProps) {
	const MotionComponent = motion.create(Component);

	return (
		<MotionComponent
			{...animation}
			href={href}
			className={className}
			{...props}
		>
			{children}
		</MotionComponent>
	);
}
