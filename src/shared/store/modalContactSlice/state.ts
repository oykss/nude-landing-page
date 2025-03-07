import useStore from '../store';

export const useIsOpen = () => useStore(state => state.isOpen);
export const useOpenModal = () => useStore(state => state.openModal);
export const useCloseModal = () => useStore(state => state.closeModal);
