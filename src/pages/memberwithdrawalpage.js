import { Breadcrumb , Card } from "react-bootstrap";
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

function Memberwithdrawalpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                <div class="titleBox" >
                    <h1 style={titleStyle}>회원탈퇴</h1>
                </div>
                <div class="inputBox">
                    <label style={labelStyle}>현재 비밀번호 확인</label>
                    <InputGroupComponent />
                    <label style={labelStyle}>탈퇴 이유</label>
                    <InputGroupComponent />
                </div>
                <div style={buttonwrapper}>
                    <ButtonComponent text="뒤로가기" />
                    <ButtonComponent text="확인" />
                </div>
                </Card>
            </div>
            
            <div>
                Memberwithdrawalpage
                <Breadcrumb>
                    <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user">뒤로 가기</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">확인</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent>
    );
}

export default Memberwithdrawalpage;