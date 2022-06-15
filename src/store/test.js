import create from "zustand";

// 스토어
// state, mutation, action
// state(상태) = 변수 -> 내가 갖고 있을 값.
// mutation = state를 변경하는 함수.
// action = store를 조작하는 함수.

// 리액트에서는 뮤테이션과 액션을 따로 구분하지 않음
// 함수다 그래서 스테이트를 변경한다.

const useStore = create((set) => ({
    counter: 0,
    plus: () => set((state) => {
        state.counter++;
    }),
    setValue: (value) => set({
        counter: value,
    }),
}));

export default useStore;