import React, { useState } from 'react';
import { Axios } from "../apis/utils/index";
import { useCookies } from 'react-cookie';
import { Button } from "react-bootstrap";

import bg from "../assets/image/bg1.jpg";
import logo from "../assets/logo/logo_transparent.png";
import kakao from "../assets/image/kakao_login_medium_wide.png";
import ButtonComponent from "../components/buttoncomponent";
import { Card } from "react-bootstrap";
import { login } from "../apis/api/user"

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
    border: "1px solid gray",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px"
}

const inputboxgroupStyle = {
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

const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
}

const kakaoLogin = async () => {
    const response = await Axios.get('/info/oauth2/kakao/client-id');
    window.open([response.data.uri], '_self');
}

const toMain = () => {
    window.location.replace(isProd ? "http://imcf.kr/main" : "http://localhost:5000/main");
}

function Loginpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
    let params = new URLSearchParams(window.location.search);

    const goLogin = async () => {
        const response = await login({
            email: email,
            password: password
        });
        if (response.code === 500) {
            alert("존재하지 않거나, 잘못된 정보를 입력하였습니다.");
            return;
        }
        setCookie('userInfo', {
            thumb: response.data.profileImage,
            name: response.data.name,
            email: response.data.email,
            token: response.data.token,
            platformType: response.data.platformType,
            expireTime: response.data.expireTime,
        });
        window.location.href = "/main";
    }

    const changeId = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const changePwd = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

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
                                <div style = {inputboxgroupStyle}>
                                    <input style={inputboxStyle} placeholder="ID" onChange={ (e) => changeId(e) }></input>
                                    <input style={inputboxStyle} type="password" placeholder="PWD" onChange={ (e) => changePwd(e) }></input>
                                </div>
                                <div style={buttonboxStyle}>
                                    <Button type='button' style={btnStyle} onClick={goLogin}>로그인</Button>
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