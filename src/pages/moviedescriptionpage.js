import { Breadcrumb } from "react-bootstrap";

function Moviedescriptionpage() {
    return (
        <div>
            Moviedescriptionpage
            <Breadcrumb>
                <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/usermypage">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/moviereviewpage">댓글 달기</Breadcrumb.Item>
                <Breadcrumb.Item href="/moviealgopage">관련 영화</Breadcrumb.Item>
                <Breadcrumb.Item href="/main">뒤로 가기</Breadcrumb.Item>
                <Breadcrumb.Item href="/playscreen_fullpage">재생</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Moviedescriptionpage;