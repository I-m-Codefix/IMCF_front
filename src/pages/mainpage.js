import { Breadcrumb } from "react-bootstrap";
import LayoutComponent from "../components/layoutComponent";

function Mainpage() {
    return (
        <LayoutComponent>
            <div>
                Mainpage
                <Breadcrumb>
                    <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/usermypage">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/moviedescriptionpage">영화설명</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent>
    );
}

export default Mainpage;