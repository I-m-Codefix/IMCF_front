import { Breadcrumb , Card , Form } from "react-bootstrap";
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

const titleStyle = {
    color: "white"
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

const checkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}


function Cpapage() {
    return (
        <LayoutComponent>
        <div style={mainStyle}>
            <Card style={cardStyle}>
            <div class="titleBox" >
                <h1 style={titleStyle}>컨텐츠제공자 신청</h1>
            </div>
            <div class="inputBox">
                <label style={labelStyle}>직업</label>
                <InputGroupComponent />
                <label style={labelStyle}>소속</label>
                <InputGroupComponent />
                <label style={labelStyle}>이메일</label>
                <InputGroupComponent />
                <label style={labelStyle}>개인정보 수집동의</label>
                <div style={checkStyle}>
                    <Form.Check.Label style={labelStyle}>약관에 동의합니다.</Form.Check.Label>
                    <Form.Check />
                </div>
                <InputGroupComponent />
            </div>
            <div style={buttonwrapper}>
                <ButtonComponent btn_text="뒤로가기" btn_link="/user" />
                <ButtonComponent btn_text="확인" btn_link="/user" />
            </div>
            </Card>
        </div>
        </LayoutComponent>
    );
}

export default Cpapage;