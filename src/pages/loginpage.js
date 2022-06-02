import { Breadcrumb, Card } from "react-bootstrap";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import MoviePosterComponent from "../components/moviepostercomponent";

const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
};

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
};

const rowStyle = {
    display: "flex",
    flexDirection: "row",
}

function Loginpage() {
    return (
        <div style={divStyle}>
            Loginpage
            <Breadcrumb>
                <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/signuppage">회원가입</Breadcrumb.Item>
                <Breadcrumb.Item active>카카오로그인</Breadcrumb.Item>
            </Breadcrumb>
            <Card style={cardStyle}>
                <div style={rowStyle}>
                    <div>
                        <InputGroupComponent props = "ID"></InputGroupComponent>
                        <InputGroupComponent props = "PWD"></InputGroupComponent>
                    </div>
                    <ButtonComponent props="로그인" /><br/>
                </div>
                <div style={rowStyle}>
                    <ButtonComponent props="회원가입" /><br/>
                    <ButtonComponent props="카카오로그인" />
                </div>
            </Card>
            
            {/* <MoviePosterComponent props="asdasd" title ="asssaa"></MoviePosterComponent> */}

        </div>
    );
}

export default Loginpage;