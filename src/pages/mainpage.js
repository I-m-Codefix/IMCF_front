import { Breadcrumb } from "react-bootstrap";

function Mainpage() {
    return (
        <div>
            Mainpage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">영화설명</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Mainpage;