import { Benefits, Header, Hero, HowNudeHelps } from './components';

import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useStore } from './shared';

export default function App() {
	const { setIsMediaPoints } = useStore();
	const isMobile = useMediaQuery({ query: '(min-width: 768px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 1280px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

	useEffect(() => {
		setIsMediaPoints({ isMobile, isTablet, isDesktop });
	}, [isMobile, isTablet, isDesktop, setIsMediaPoints]);

	return (
		<>
			<Header />
			<main>
				<Hero />
				<Benefits />
				<HowNudeHelps />
			</main>
		</>
	);
}
