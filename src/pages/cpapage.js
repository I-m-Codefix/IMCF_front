import { Breadcrumb } from "react-bootstrap";

function Cpapage() {
    return (
        <div>
            Cpapage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
                <Breadcrumb.Item href="#">확인</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Cpapage;