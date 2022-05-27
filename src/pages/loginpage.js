import { Breadcrumb } from "react-bootstrap";
import ButtonComponent from "../components/testComponents";

function Loginpage() {
    return (
        <div>
            Loginpage
            <Breadcrumb>
                <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/signuppage">회원가입</Breadcrumb.Item>
                <Breadcrumb.Item active>카카오로그인</Breadcrumb.Item>
            </Breadcrumb>
            <ButtonComponent customText="이인준" />
            <ButtonComponent customText="바보" />
            <ButtonComponent customText="똥멍청이" />
            <ButtonComponent customText="해파리" />
        </div>
    );
}

export default Loginpage;