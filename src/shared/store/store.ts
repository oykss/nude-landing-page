import { create } from 'zustand';
import type { typeMediaSlice } from './mediaSlice';
import { createMediaSlice } from './mediaSlice';
import type { typeModalContactSlice } from './modalContactSlice';
import { createModalContactSlice } from './modalContactSlice';

type Store = typeModalContactSlice & typeMediaSlice;

const useStore = create<Store>()((...a) => ({
	...createMediaSlice(...a),
	...createModalContactSlice(...a),
}));

export default useStore;
