import { create } from "zustand";

interface ICentralStore {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const useCentralStore = create<ICentralStore>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (value: boolean): void => {
    set(() => ({ isDarkMode: value }));
  },
}));
