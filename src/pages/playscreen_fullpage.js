import { Breadcrumb } from "react-bootstrap";

function Playscreen_fullpage() {
    return (
        <div>
            Playscreen_fullpage
            <Breadcrumb>
                <Breadcrumb.Item href="/infomovie">뒤로 가기</Breadcrumb.Item>
                <Breadcrumb.Item href="/playscreen_windowpage">창모드</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Playscreen_fullpage;