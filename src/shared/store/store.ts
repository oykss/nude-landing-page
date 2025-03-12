import { create } from 'zustand';
import type { typeMediaSlice } from './mediaSlice/slice';
import { createMediaSlice } from './mediaSlice/slice';
import type { typeModalContactSlice } from './modalContactSlice/slice';
import { createModalContactSlice } from './modalContactSlice/slice';

type Store = typeModalContactSlice & typeMediaSlice;

const useStore = create<Store>()((...a) => ({
  ...createMediaSlice(...a),
  ...createModalContactSlice(...a),
}));

export default useStore;
