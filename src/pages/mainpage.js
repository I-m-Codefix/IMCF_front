import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import LayoutComponent from "../components/layoutComponent";
import PosterComponent from "../components/postercomponent";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const rowStyle = {
    height: "50%",
    padding: "10px"
}

const movieBox = {
    height: "50%"
}

function Mainpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Container style={movieBox}>
                    <Row style={rowStyle}>
                        <Col><PosterComponent name="영화제목1" /></Col>
                        <Col><PosterComponent name="영화제목2" /></Col>
                        <Col><PosterComponent name="영화제목3" /></Col>
                        <Col><PosterComponent name="영화제목4" /></Col>
                        <Col><PosterComponent name="영화제목5" /></Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col><PosterComponent name="영화제목6" /></Col>
                        <Col><PosterComponent name="영화제목7" /></Col>
                        <Col><PosterComponent name="영화제목8" /></Col>
                        <Col><PosterComponent name="영화제목9" /></Col>
                        <Col><PosterComponent name="영화제목10" /></Col>
                    </Row>
                </Container>
            </div>
            <div>
                Mainpage
                <Breadcrumb>
                    <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/infomovie">영화설명</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent>
    );
}

export default Mainpage;