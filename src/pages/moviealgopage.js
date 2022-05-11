import { Breadcrumb } from "react-bootstrap";

function Moviealgopage() {
    return (
        <div>
            Moviealgopage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">영화 설명</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Moviealgopage;