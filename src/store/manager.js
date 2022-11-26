import create from "zustand"

const useStore = create((set) => ({
    language: 'ko',
    policy: false,
    signupData: {
        platformType: "IMCF"
    },
    setName: (userName) => set((state) => {
        state.signupData.name = userName;
        console.log("현재 정보 : ", state.signupData);
    }),
    setEmail: (userEmail) => set((state) => {
        state.signupData.email = userEmail;
        console.log("현재 정보 : ", state.signupData);
    }),
    setPassword: (userPassword) => set((state) => {
        state.signupData.password = userPassword;
        console.log("현재 정보 : ", state.signupData);
    }),
    setSignupData: (userData) => set((state) => {
        state.signupData.name = userData.name;
        state.signupData.email = userData.email;
        state.signupData.password = userData.password;
    }),
    changePolicy: (policy) => set((state) => {
        state.policy = policy;
    }),
}));

export default useStore;