import useStore from "../store/manager";
import TestLayout from "../layouts/TestLayout";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TestStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "100px",
}

const setValueStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "30px",
}

const inputStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "2000px",
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
  const setValue = useStore(state => state.setValue);
  const plus = useStore(state => state.plus);
  return (
    <TestLayout>
      <h1 style={colorWhite}>테스트1</h1>
      <div style={TestStyle}>
        <div style={colorWhite}>{counter}</div>
        <div style={setValueStyle}>
          <div style={inputStyle}>
            <input id="input_setvalue" onChange={onValue} />
          </div>
          <Button variant="success" id="input_setvalue" onClick={() => setValue(inputValue)}>적용</Button>
        </div>
        <Button variant="success" onClick={plus}>더하기</Button>
        <Button variant="secondary" onClick={() => { navigate("/test2") }}>Test2</Button>
      </div>
    </TestLayout>
  );
}

export default Test;