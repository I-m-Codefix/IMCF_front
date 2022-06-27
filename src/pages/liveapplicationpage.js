import { Breadcrumb, Card } from "react-bootstrap";
import LayoutComponent from "../layouts/layoutComponent";
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

function Liveapplicationpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div class="inputBox" style={registmovieBox}>
                        <label style={labelStyle}>영화 제목</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>감독</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>출연진</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>장르</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>날짜 시간</label>
                        <InputGroupComponent />
                        <label style={labelStyle}>공연 설명</label>
                        <InputGroupComponent />
                    </div>
                    <div style={buttonwrapper}>
                        <ButtonComponent btn_text="뒤로가기" btn_link="/user" />
                        <ButtonComponent btn_text="확인" btn_link="/user"/>
                    </div>
                </Card>
            </div>
        </LayoutComponent>
    );
}

export default Liveapplicationpage;