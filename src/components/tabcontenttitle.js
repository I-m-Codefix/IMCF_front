import { Row, Col } from "react-bootstrap";
import PosterComponent from "./postercomponent";
import "../styles/Components/inputComponent.scss"
import ReviewComponent from "./reviewcomponent";

const rowStyle = {
    height: "50%",
    padding: "10px"
}

export default function TabContentTitle(tabs) {
    if (tabs.num === "0") {
        return (
            <ReviewComponent />
        );
    } else if (tabs.num === "1") {
        return (
            <Row style={rowStyle}>
                <Col><PosterComponent name="영화제목1" /></Col>
                <Col><PosterComponent name="영화제목2" /></Col>
                <Col><PosterComponent name="영화제목3" /></Col>
            </Row>);
    }
}