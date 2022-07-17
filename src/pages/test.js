import useStore from "../store/manager";
import TestLayout from "../layouts/TestLayout";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TestStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "200px",
}

const colorWhite = {
  color: "white",
}

let inputValue = 0;

const onValue = (e) => {
  inputValue = e.target.value;
}

function Test() {
  let navigate = useNavigate();
  const counter = useStore(state => state.counter);
  const plus = useStore(state => state.plus);
  const setValue = useStore(state => state.setValue);
  return (
    <TestLayout>
      <h1 style={colorWhite}>테스트1</h1>
      <div style={TestStyle}>
        <div style={colorWhite}>{counter}</div>
        <input onChange={onValue} />
        <Button variant="warning" onClick={() => setValue(inputValue)}>적용하기</Button>
        <Button variant="success" onClick={plus}>더하기</Button>
        <Button variant="secondary" onClick={() => {navigate("/test2")}}>Test2</Button>
      </div>
    </TestLayout>
  );
}

export default Test;