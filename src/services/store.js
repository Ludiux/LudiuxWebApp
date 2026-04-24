import { create } from 'zustand';

const useHammerStore = create((set) => ({
    hammer: false,
    setHammer: (value) => set({ hammer: value }),
}));

export default useHammerStore;