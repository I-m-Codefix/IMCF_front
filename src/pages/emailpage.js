import { Card } from "react-bootstrap";
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
    width: "60%",
    padding: "30px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const changeBox = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "10px 0",
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}

const labelStyle = {
    width: "200px",
    color: "white",
    padding: "0 0px 0 0"
}

const titleStyle = {
    display: "flex",
    justifyContent: "center",
    width: "750px",
    color: "white",
    padding: "0 0px 0 0"
}



function Emailpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={changeBox}>
                        <h1>
                        <label style={titleStyle}>이메일 인증</label>
                        </h1>
                    </div>
                    <div style={changeBox}>
                        <label style={labelStyle}>이메일 입력</label>
                        <InputGroupComponent />
                        <ButtonComponent btn_text="인증메일 전송" btn_link="/email"/>
                    </div>
                    <div style={buttonwrapper}>
                        <ButtonComponent btn_text="뒤로가기" btn_link="/modify"/>
                        <ButtonComponent btn_text="확인" btn_link="/modify"/>
                    </div>
                </Card>
            </div >
        </LayoutComponent >
    );
}
export default Emailpage;