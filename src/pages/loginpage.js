import { Breadcrumb, FormControl, InputGroup } from "react-bootstrap";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import MoviePosterComponent from "../components/moviepostercomponent";

function Loginpage() {
    return (
        <div>
            Loginpage
            <Breadcrumb>
                <Breadcrumb.Item href="/main">메인페이지</Breadcrumb.Item>
                <Breadcrumb.Item href="/signuppage">회원가입</Breadcrumb.Item>
                <Breadcrumb.Item active>카카오로그인</Breadcrumb.Item>
            </Breadcrumb>
            <InputGroupComponent props = "ID"></InputGroupComponent>
            <InputGroupComponent props = "PWD"></InputGroupComponent>
            <ButtonComponent props="로그인" /><br/>
            <ButtonComponent props="회원가입" /><br/>
            <ButtonComponent props="카카오로그인" />
            
            {/* <MoviePosterComponent props="asdasd" title ="asssaa"></MoviePosterComponent> */}

        </div>
    );
}

export default Loginpage;