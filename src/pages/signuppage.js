import { Card, Form } from "react-bootstrap";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import bg from "../assets/image/bg1.jpg";
import useStore from "../store/manager";
import { useEffect } from "react";

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

const inputwrapper = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "0 50px"
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}

const labelStyle = {
    color: "white",
    padding: "0 10px 0 0"
}

const checkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}

function Signuppage() {
    const { signupData, policy, setName, setEmail, setPassword, changePolicy } = useStore();

    let isPolicy = policy;

    const changeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const changeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handlePolicy = () => {
        isPolicy = !isPolicy;
        changePolicy(isPolicy);
    };

    useEffect(() => {
        return () => {
            changePolicy(false);
        }
    }, []);

    return (
        <div style={bgStyle}>
            <div style={overlayStyle}>
                <div style={wrapperStyle}>
                    <Card style={cardStyle}>
                        <div style={inputwrapper}>
                            <label style={labelStyle}>이메일</label>
                                <input name="email" onChange={ changeEmail } />
                            <label style={labelStyle}>비밀번호</label>
                                <input name="password" onChange={ changePassword }/>
                            <label style={labelStyle}>비밀번호 확인</label>
                                <input name="passwordCheck" />
                            <label style={labelStyle}>이름</label>
                                <input name="name" onChange={ changeName }/>
                            {/*<label style={labelStyle}>생년월일</label>
                            <InputGroupComponent />
                            <label style={labelStyle}>전화번호 인증</label>
                            <InputGroupComponent />*/}
                            <label style={labelStyle}>약관동의</label>
                                <InputGroupComponent />
                            <div style={checkStyle}>
                                <Form.Check.Label style={labelStyle}>약관에 동의합니다.</Form.Check.Label>
                                <Form.Check type="checkbox" onChange={ () => { handlePolicy() } } />
                            </div>
                        </div>
                        <div style={buttonwrapper}>
                            <ButtonComponent btn_text="뒤로가기" btn_link="/" />
                            <ButtonComponent btn_text="확인" btn_link={`/signup/auth?email=${signupData.email}&password=${signupData.password}&name=${signupData.name}`} keyword="policy" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Signuppage;