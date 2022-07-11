import create from "zustand";

// 스토어
// state, mutation, action
// state(상태) = 변수 -> 내가 갖고 있을 값.
// mutation = state를 변경하는 함수.
// action = store를 조작하는 함수.

// 리액트에서는 뮤테이션과 액션을 따로 구분하지 않음
// 함수다 그래서 스테이트를 변경한다.

// ** Zustand **
// Create 함수를 통해 상태, 액션을 정의하면
// 컴포넌트에서 사용할 수 있는 useStore 훅(Hook)을 반환
//
// 컴포넌트에서 사용시 이를 결정하는 셀렉터 함수를 전달해야 함.
// 그래야 스토어에서 필요한 부분만 가져옴.
// 그렇지 않으면 스토어 전체를 리턴.
// const temp = useStore(state => state.이름);
// onClick={temp}, <h1>{temp}<h1> 등으로 사용 가능.

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