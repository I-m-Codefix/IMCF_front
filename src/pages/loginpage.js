import React from 'react';
import { Axios } from "../apis/utils/index";
import { useCookies } from 'react-cookie';

import bg from "../assets/image/bg1.jpg";
import logo from "../assets/logo/logo_transparent.png";
import kakao from "../assets/image/kakao_login_medium_wide.png";

import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";

import { Card } from "react-bootstrap";

const isProd = process.env.NODE_ENV === 'production' ? true : false;

const bgStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "450px",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
};

const rowStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px 0",
}

const colStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px 25%",
}

const inputboxStyle = {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px"
}

const buttonboxStyle = {
    display: "flex",
    width: "30%",
}

const overlayStyle = {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
}

const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const logoStyle = {
    width: "500px",
    height: "500px",
}

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const posterRowStyle = {
    height: "50%",
    padding: "10px"
}

const movieBox = {
    height: "50%"
}

const kakaoLogin = async () => {
    const response = await Axios.get('/info/oauth2/kakao/client-id');
    window.open([response.data.uri], '_self');
}

const toMain = () => {
    window.location.replace(isProd ? "http://imcf.kr/main" : "http://localhost:5000/main");
}

function Loginpage({ history }) {
    const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
    let params = new URLSearchParams(window.location.search);
    if (params.get('token') !== null) {
        let token = params.get('token');
        console.log(`token: ${params}`);
        setCookie('userInfo', {
            thumb: params.get('profileImage'),
            name: params.get('name'),
            email: params.get('email'),
            token: token,
            platformType: params.get('platformType'),
            expireTime: params.get('expireTime')
        });
        // 꼼수 - 컴포넌트 이벤트에 괄호를 넣으면 렌더링 되는 즉시 실행.
        return (
            <div onClick={toMain()}>
                로딩중...
            </div>
        );
    } else {
        return (
            <div style={bgStyle}>
                <div style={overlayStyle}>
                    <div style={wrapperStyle}>
                        <img src={logo} style={logoStyle} />
                        <Card style={cardStyle}>
                            <div style={rowStyle}>
                                <div style={inputboxStyle}>
                                    <InputGroupComponent placeholder="ID"></InputGroupComponent>
                                    <InputGroupComponent placeholder="PWD"></InputGroupComponent>
                                </div>
                                <div style={buttonboxStyle}>
                                    <ButtonComponent btn_text="로그인" btn_link="/main" /><br />
                                </div>
                            </div>
                            <div style={colStyle}>
                                <ButtonComponent btn_text="회원가입" btn_link="/signup" /><br />
                            </div>
                            <div>
                                <img src={kakao} onClick={kakaoLogin} />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loginpage;