import create from "zustand"

const useStore = create((set) => ({
    language: 'ko',
    policy: false,
    changePolicy: (policy) => set((state) => {
        state.policy = policy;
    }),
}));

export default useStore;