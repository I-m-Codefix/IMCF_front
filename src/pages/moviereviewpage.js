import { Breadcrumb } from "react-bootstrap";

function Moviereviewpage() {
    return (
        <div>
            Moviereviewpage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Moviereviewpage;