import { Card, Button } from "react-bootstrap";
import LayoutComponent from "../layouts/layoutComponent";
import ButtonComponent from "../components/buttoncomponent";
import { useCookies } from 'react-cookie';
import { Axios } from "../apis/utils/index";

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

const thumbStyle = (thumbnail) => {
    return {
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "100px",
        width: "100px",
        height: "100px",
        borderRadius: "50%"
    }
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

const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
}

const onClickHandler = async ([cookies, getCookies, removeCookie]) => {
    const response = await Axios.get('/login/oauth2/logout',
        {
            headers: {
                'Authorization': cookies.userInfo.token,
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
    if (response.data.code === 200) {
        await removeCookie('userInfo');
        window.location.replace('/');
    } else {
        console.log(cookies);
        console.log(response);
    }
}

function Usermypage() {
    const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const username = cookies.userInfo?.name;
    const thumbnail = cookies.userInfo?.thumb;
    
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={profile}>
                        <div style={thumbStyle(thumbnail)} />
                        <div style={nameStyle}>{username}</div>
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
                        <Button onClick={() => {onClickHandler([cookies, getCookies, removeCookie])}} style={btnStyle}>로그아웃</Button>
                        <ButtonComponent btn_text="회원탈퇴" btn_link="/delete" />
                    </div>
                    <div style={request}>
                        <ButtonComponent btn_text="뒤로가기" btn_link="/main" />
                    </div>
                </Card>
            </div>
        </LayoutComponent>
    );
}

export default Usermypage;