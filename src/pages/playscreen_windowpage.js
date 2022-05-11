import { Breadcrumb } from "react-bootstrap";

function Playscreen_windowpage() {
    return (
        <div>
            Playscreen_windowpage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">관련영화</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
                <Breadcrumb.Item href="#">전체화면모드</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Playscreen_windowpage;