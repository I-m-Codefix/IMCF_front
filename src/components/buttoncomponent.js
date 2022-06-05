import { Button } from "react-bootstrap";
import "../styles/Components/buttonComponent.scss";

const divStyle = {
    width: "100%",
    height: "100%",
    padding: "0 10px"
}

export default function ButtonComponent({ props}) {
    return (
        <div style={divStyle}>
            <Button> {props} </Button>
        </div>
    );
}