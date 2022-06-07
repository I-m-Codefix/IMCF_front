import { Breadcrumb, Card, Form } from "react-bootstrap";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import bg from "../assets/image/bg1.jpg";

const bgStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
};

const overlayStyle = {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
}

const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const inputwrapper = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "0 50px"
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}

const labelStyle = {
    color: "white",
    padding: "0 10px 0 0"
}

const checkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}

function Signuppage() {
    return (
        <div style={bgStyle}>
            <div style={overlayStyle}>
                <div style={wrapperStyle}>
                    Signuppage
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">뒤로 가기</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">확인</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card style={cardStyle}>
                        <div style={inputwrapper}>
                            <label style={labelStyle}>아이디</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>비밀번호</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>비밀번호 확인</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>이름</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>생년월일</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>전화번호 인증</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>약관동의</label>
                            <InputGroupComponent />
                            <div style={checkStyle}>
                                <Form.Check.Label style={labelStyle}>약관에 동의합니다.</Form.Check.Label>
                                <Form.Check />
                            </div>
                        </div>
                        <div style={buttonwrapper}>
                            <ButtonComponent props="뒤로가기" />
                            <ButtonComponent props="다음" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Signuppage;