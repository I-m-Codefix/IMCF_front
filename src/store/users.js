import create from "zustand"

const useStore = create((set) => ({
    name: '',
    email: '',
    platforType: '',
    platformImage: '',
    setData: (userData) => set((state) => {
        state.name = userData.name;
        state.email = userData.email;
        state.platforType = userData.platforType;
        state.platformImage = userData.platformImage;
    }),
}));

export default useStore;