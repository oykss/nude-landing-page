import useStore from '../store';

export const useSetIsMediaPoints = () =>
  useStore(state => state.setIsMediaPoints);
export const useMediaPoints = () => useStore(state => state.MediaPoints);
