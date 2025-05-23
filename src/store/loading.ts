import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  loading: false,
  setLoading: (value: boolean) => set({ loading: value }),
}));
