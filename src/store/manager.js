import create from "zustand"
import { devtools } from "zustand/middleware";

const store = (set) => ({
    language: 'ko',
    counter: 0,
    plus: () => set((state) => {
        state.counter++;
    }),
    setValue: (value) => set({
        counter: value,
    }),
});

const useStore = create(devtools(store));

export default useStore;