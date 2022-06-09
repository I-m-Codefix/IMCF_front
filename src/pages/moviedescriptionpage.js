import { Breadcrumb, Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import LayoutComponent from "../components/layoutComponent";
import PosterComponent from "../components/postercomponent";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const rowStyle = {
    height: "100%",
    width: "100%",
    padding: "10px"
}

const movieBox = {
    display: "flex",
    width: "200px",
    height: "200px"
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const labelStyle = {
    color: "white",
    padding: "0 10px 0 0"
}

const headStyle = {
    border: "1px solid red",
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
}

const infoStyle = {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "350px",
    flexDirection: "column"
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}
const chageBox = {
    border: "1px solid red",
    display: "flex",
    width: "100%",
}

function Moviedescriptionpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={headStyle}>
                        <div style={movieBox}>
                            <div style={rowStyle}>
                                <PosterComponent name="영화제목" />
                            </div>
                        </div>
                        <div style={infoStyle}>
                            <label style={labelStyle}>감독 이름</label>
                            <label style={labelStyle}>출연진</label>
                            <label style={labelStyle}>영화 설명</label>
                        </div>
                    </div>
                    <div style={chageBox}>
                        <Navbar variant="dark">
                            <Container>
                                <Nav.Link>리뷰 작성</Nav.Link>
                                <Nav.Link>관련 영화</Nav.Link>
                            </Container>
                        </Navbar>
                    </div>
                    <div style={buttonwrapper} >
                        <InputGroupComponent />
                        <ButtonComponent text="입력" />
                    </div>
                    <div style={buttonwrapper}>
                        <ButtonComponent text="뒤로가기" />
                        <ButtonComponent text="확인" />
                    </div>
                </Card>
            </div>
            <div>
                <div style={{ color: "white" }}>Moviedescriptionpage</div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/main">뒤로 가기</Breadcrumb.Item>
                    <Breadcrumb.Item href="/playscreen_fullpage">재생</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent >
    );
}

export default Moviedescriptionpage;