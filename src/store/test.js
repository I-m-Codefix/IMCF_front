import create from "zustand";

const useStore = create((set) => ({
    counter: 0,
    plus: () => set((state) => {
        state.counter++;
    }),
    setVlaue: (value) => set({
        counter: value,
    }),
}));

export default useStore;