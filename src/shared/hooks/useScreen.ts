import useStore from '../store/store';

export default function useScreen() {
	const { MediaPoints } = useStore();
	return { ...MediaPoints };
}
