import useStore from "../store/test";

function Test() {
  // 1번 방식
  const count = useStore((state) => state.counter);

  // 2번 방식
  const { counter, plus, setValue } = useStore();

  // 자바스크립트 기본
  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="Test">
      <div>
        <h1>1번 방식</h1>
        {count}<br />
        <button onClick={useStore((state) => state.plus)}>Plus Count</button>
      </div>
      <div>
        <h1>2번 방식</h1>
        {counter}<br />
        <button onClick={plus}>Plus Count</button>
      </div>
      <div>
        <h1>값 할당</h1>
        {counter}<br />
        <input onChange={onChange} />
        <button onClick={plus}>Plus Count</button>
      </div>
    </div>
  );
}

export default Test;