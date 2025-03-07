import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	Benefits,
	ContactUsModal,
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

			<ContactUsModal />
			<ScrollDownBtn />
		</>
	);
}
