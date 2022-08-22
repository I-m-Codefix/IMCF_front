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


function Pwdchangepage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={changeBox}>
                        <h1>
                        <label style={titleStyle}>비밀번호 변경</label>
                        </h1>
                    </div>
                    <div style={changeBox}>
                        <label style={labelStyle}>현재 비밀번호 확인</label>
                        <InputGroupComponent />
                    </div>
                    <div style={changeBox}>
                        <label style={labelStyle}>새 비밀번호</label>
                        <InputGroupComponent />
                    </div>
                    <div style={changeBox}>
                        <label style={labelStyle}>새 비밀번호 확인</label>
                        <InputGroupComponent />
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
export default Pwdchangepage;