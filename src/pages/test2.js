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

function Test2() {
  let navigate = useNavigate();
  const counter = useStore(state => state.counter);
  const plus = useStore(state => state.plus);
  return (
    <TestLayout>
      <h1 style={colorWhite}>테스트2</h1>
      <div style={TestStyle}>
        <div style={colorWhite}>{counter}</div>
        <Button variant="success" onClick={plus}>더하기</Button>
        <Button variant="secondary" onClick={() => {navigate("/test")}}>Test1</Button>
      </div>
    </TestLayout>
  );
}

export default Test2;