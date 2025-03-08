import { lazy, Suspense, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	Benefits,
	Footer,
	FTBAccounts,
	Header,
	Hero,
	HowNudeHelps,
	InstantKeys,
	LetsGetUnpacked,
	LisaAndIsa,
	ScrollDownBtn,
} from './components';
import { useSetIsMediaPoints } from './shared';

const ContactUsModal = lazy(
	() => import('./components/ContactUsModal/ContactUsModal')
);

export default function App() {
	const setIsMediaPoints = useSetIsMediaPoints();
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
				<InstantKeys />
				<FTBAccounts />
				<LetsGetUnpacked />
			</main>
			<Footer />
			<LisaAndIsa />

			<Suspense fallback={null}>
				<ContactUsModal />
			</Suspense>
			<ScrollDownBtn />
		</>
	);
}
