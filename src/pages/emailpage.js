import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import ButtonComponent from "../components/buttoncomponent";
import { useLocation } from "react-router";
import bg from "../assets/image/bg1.jpg";
import { useQuery } from "react-query";
import { signup } from "../apis/api/user";

const bgStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
};

const overlayStyle = {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
}

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
    width: "60%",
    padding: "30px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const changeBox = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "10px 0",
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}

const titleStyle = {
    display: "flex",
    justifyContent: "center",
    width: "750px",
    color: "white",
    padding: "0 0px 0 0"
}

const isEmpty = (params) => {
    return Object.keys(params).length === 0;
}

function Emailpage() {
    const location = useLocation();
    const userData = new URLSearchParams(location.search);
    const key = userData.get('secretKey') != null ? userData.get('secretKey') : null;
    const email = userData.get('email') != null ? userData.get('email') : null;
    const password = userData.get('password') != null ? userData.get('password') : null;
    const name = userData.get('name') != null ? userData.get('name') : null;

    const { data, isLoading, error } = useQuery("signupData", () => {
        if (email != null && password != null && name != null) {
            signup({
                email: email,
                password: password,
                name: name,
                platformType: "IMCF",
                platformImage: ""
            });
        } else {
            return null;
        }
    });

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        if (key != null) {
            console.log("key : ", isEmpty(key));
        } else {
            return (
                <div style={bgStyle}>
                    <div style={overlayStyle}>
                        <div style={mainStyle}>
                            <Card style={cardStyle}>
                                <div style={changeBox}>
                                    <h1 style={titleStyle}>
                                        메일이 발송되었습니다.<br />메일을 확인하고 링크를 클릭해주세요.
                                    </h1>
                                </div>
                                <div style={buttonwrapper}>
                                    <ButtonComponent btn_text="돌아가기" btn_link="/" />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            )
        }
    
        return (
            <div style={bgStyle}>
                <div style={overlayStyle}>
                    <div style={mainStyle}>
                        <Card style={cardStyle}>
                            <div style={changeBox}>
                                <h1 style={titleStyle}>
                                    인증되었습니다.<br />
                                    로그인페이지로 이동하여 로그인 해주세요.
                                </h1>
                            </div>
                            <div style={buttonwrapper}>
                                <ButtonComponent btn_text="로그인하기" btn_link="/" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
export default Emailpage;