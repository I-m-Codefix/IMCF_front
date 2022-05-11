import { Breadcrumb } from "react-bootstrap";

function Loginpage() {
    return (
        <div>
            Loginpage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">회원가입</Breadcrumb.Item>
                <Breadcrumb.Item active>카카오로그인</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Loginpage;