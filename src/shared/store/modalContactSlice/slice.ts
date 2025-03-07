import { StateCreator } from 'zustand';

export type typeModalContactSlice = {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export const createModalContactSlice: StateCreator<
	typeModalContactSlice
> = set => ({
	isOpen: false,
	openModal: () => {
		set({ isOpen: true });
		document.body.style.overflow = 'hidden';
	},
	closeModal: async () => {
		set({ isOpen: false });
		document.body.style.overflow = '';
	},
});
