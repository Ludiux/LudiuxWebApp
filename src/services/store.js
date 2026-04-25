import {create} from 'zustand'

const hammerStore = create((set) => ({
    hammerVisible: false,
    setHammerVisibility: (visibility) => set((state) => ({
        hammerVisible: visibility,
    }))
}));

export default hammerStore;