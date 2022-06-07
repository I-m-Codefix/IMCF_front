import { Breadcrumb } from "react-bootstrap";

function Playscreen_windowpage() {
    return (
        <div>
            Playscreen_windowpage
            <Breadcrumb>
                <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/user">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/infomovie">뒤로 가기</Breadcrumb.Item>
                <Breadcrumb.Item href="/playscreen_fullpage">전체화면모드</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Playscreen_windowpage;