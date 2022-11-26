import create from "zustand"

const useStore = create((set) => ({
    name: '',
    email: '',
    password: '',
    platforType: '',
    platformImage: '',
    setData: (userData) => set((state) => {
        state.name = userData.name;
        state.email = userData.email;
        state.platforType = userData.platforType;
        state.platformImage = userData.platformImage;
    }),
    setEmail: (email) => set((state) => {
        state.email = email;
    }),
    setPassword: (password) => set((state) => {
        state.password = password;
    })
}));

export default useStore;