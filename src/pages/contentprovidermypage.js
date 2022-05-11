import { Breadcrumb } from "react-bootstrap";

function Contentprovidermypage() {
    return (
        <div>
            Contentprovidermypage
            <Breadcrumb>
                <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="#">개인정보 수정</Breadcrumb.Item>
                <Breadcrumb.Item href="#">비밀번호 변경</Breadcrumb.Item>
                <Breadcrumb.Item href="#">영화등록 신청</Breadcrumb.Item>
                <Breadcrumb.Item href="#">라이브공연 신청</Breadcrumb.Item>
                <Breadcrumb.Item href="#">로그아웃</Breadcrumb.Item>
                <Breadcrumb.Item href="#">회원탈퇴</Breadcrumb.Item>
                <Breadcrumb.Item href="#">뒤로 가기</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Contentprovidermypage;