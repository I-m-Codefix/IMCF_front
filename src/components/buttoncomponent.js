import { Button } from "react-bootstrap";
import "../styles/Components/buttonComponent.scss";

const divStyle = {
    width: "100%",
    height: "100%",
    padding: "0 10px"
}

const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
}

export default function ButtonComponent({ btn_text, btn_link }) {
    return (
        <div style={divStyle}>
            <Button style={btnStyle} href={btn_link}> {btn_text} </Button>
        </div>
    );
}