import { Breadcrumb } from "react-bootstrap";

function Moviedescriptionpage() {
    return (
        <div>
            Moviedescriptionpage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">댓글 달기</Breadcrumb.Item>
                <Breadcrumb.Item href="#">관련 영화</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
                <Breadcrumb.Item href="#">재생</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Moviedescriptionpage;