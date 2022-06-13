import useStore from "../store/test";

function Test() {
  // 1번 방식
  const count = useStore((state) => state.counter);

  // 2번 방식
  const { counter, plus } = useStore();

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
    </div>
  );
}

export default Test;