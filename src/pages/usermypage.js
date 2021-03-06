import { Breadcrumb, Card } from "react-bootstrap";
import LayoutComponent from "../layouts/layoutComponent";
import ButtonComponent from "../components/buttoncomponent";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const profile = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    padding: "25px 0",
}

const thumbStyle = {
    background: "#C4C4C4",
    width: "100px",
    height: "100px",
    borderRadius: "50%"
}

const nameStyle = {
    margin: "0 25px",
    color: "white"
}

const request = {
    display: "flex",
    width: "100%",
    padding: "25px 0",
}

function Usermypage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={profile}>
                        <div style={thumbStyle} />
                        <div style={nameStyle}>이름</div>
                    </div>
                    <div style={request}>
                        <ButtonComponent btn_text="개인 정보 수정" btn_link="/modify" />
                        <ButtonComponent btn_text="컨텐츠 제공자 신청" btn_link="/contentprovide" />
                    </div>
                    <div style={request}>
                        <ButtonComponent btn_text="영화 등록 신청" btn_link="/registmovie" />
                        <ButtonComponent btn_text="라이브 공연 신청" btn_link="/registlive" />
                    </div>
                    <div style={request}>
                        <ButtonComponent btn_text="로그아웃" btn_link="/" />
                        <ButtonComponent btn_text="회원탈퇴" btn_link="/delete" />
                    </div>
                    <div style={request}>
                        <ButtonComponent btn_text="뒤로가기" btn_link="/main"/>
                    </div>
                </Card>
            </div>
        </LayoutComponent>
    );
}

export default Usermypage;