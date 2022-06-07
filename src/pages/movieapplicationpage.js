import { Breadcrumb, Card } from "react-bootstrap";
import LayoutComponent from "../components/layoutComponent";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const labelStyle = {
    color: "white"
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}

const registmovieBox = {
    width: "100%"
}

function Movieapplicationpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div class="inputBox" style={registmovieBox}>
                        <label style={labelStyle}>영화 제목</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>영화 파일</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>감독</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>출연진</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>장르</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>영화 설명</label>
                        <InputGroupComponent />
                    </div>
                    <div style={buttonwrapper}>
                        <ButtonComponent text="뒤로가기" />
                        <ButtonComponent text="확인" />
                    </div>
                </Card>
            </div>
            <div>
                Movieapplicationpage
                <Breadcrumb>
                    <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user">뒤로 가기</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">신청</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent>
    );
}

export default Movieapplicationpage;