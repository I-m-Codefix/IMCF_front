import { Breadcrumb } from "react-bootstrap";

function Usermypage() {
    return (
        <div>
            Usermypage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">개인정보 수정</Breadcrumb.Item>
                <Breadcrumb.Item href="#">비밀번호 변경</Breadcrumb.Item>
                <Breadcrumb.Item href="#">컨텐츠제공자 신청</Breadcrumb.Item>
                <Breadcrumb.Item href="#">로그아웃</Breadcrumb.Item>
                <Breadcrumb.Item href="#">회원탈퇴</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Usermypage;