// ui elements
export { default as Animated } from './ui/Animated';
export { default as AppDownloadButtons } from './ui/AppDownloadButtons/AppDownloadButtons';
export { default as ContactUs } from './ui/BtnContactUs/BtnContactUs';
export { default as Container } from './ui/Container/Container';
export { default as Logo } from './ui/Logo/Logo';
export { default as Navigation } from './ui/Navigation/Navigation';
export { default as SocList } from './ui/SocList/SocList';

// styles
export * from './styles/index.css';

// constants
export {
	BOUNCE,
	BUTTON_PRIMARY_ANIMATION,
	DOWN_ANIMATION,
	FADE_ANIMATION,
	FADE_LEFT_ANIMATION_VP,
	FADE_RIGHT_ANIMATION_VP,
	LEFT_ANIMATION_VP,
	RIGHT_ANIMATION,
	UP_ANIMATION_VP,
} from './constants/animations';

//store
export { default as useStore } from './store/store';

//hooks
export { default as useScreen } from './hooks/useScreen';
