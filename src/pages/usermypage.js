import { Breadcrumb } from "react-bootstrap";

function Usermypage() {
    return (
        <div>
            Usermypage
            <Breadcrumb>
                <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/usermypage">마이페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/modifyinformationpage">개인정보 수정</Breadcrumb.Item>
                <Breadcrumb.Item href="/movieapplicationpage">영화등록 신청</Breadcrumb.Item>
                <Breadcrumb.Item href="/liveapplicationpage">라이브공연신청 신청</Breadcrumb.Item>
                <Breadcrumb.Item href="/cpapage">컨텐츠제공자 신청</Breadcrumb.Item>
                <Breadcrumb.Item href="/">로그아웃</Breadcrumb.Item>
                <Breadcrumb.Item href="/memberwithdrawalpage">회원탈퇴</Breadcrumb.Item>
                <Breadcrumb.Item href="/main">뒤로 가기</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Usermypage;