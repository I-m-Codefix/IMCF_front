import { Breadcrumb, Card } from "react-bootstrap";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import bg from "../assets/image/bg1.jpg";
import logo from "../assets/logo/logo_transparent.png";

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

function Loginpage() {
    return (
        <div style={bgStyle}>
            <div style={overlayStyle}>
                <div style={wrapperStyle}>
                    <img src={logo} style={logoStyle} />
                    <Card style={cardStyle}>
                        <div style={rowStyle}>
                            <div style={inputboxStyle}>
                                <InputGroupComponent placeholder = "ID"></InputGroupComponent>
                                <InputGroupComponent placeholder = "PWD"></InputGroupComponent>
                            </div>
                            <div style={buttonboxStyle}>
                                <ButtonComponent btn_text="?????????" btn_link="/main" /><br/>
                            </div>
                        </div>
                        <div style={colStyle}>
                            <ButtonComponent btn_text="????????????" btn_link="/signup" /><br/>
                            <ButtonComponent btn_text="??????????????????" btn_link="/" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;