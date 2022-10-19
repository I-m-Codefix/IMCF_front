import logo from "../assets/logo/logo_row.png";
import { BsSearch } from "react-icons/bs";
import InputGroupComponent from "./inputgroupcomponent";
import { useCookies } from 'react-cookie';

const headerStyle = {
    display: "flex",
    background: "#9A8C98",
    color: "white",
    width: "100%",
    height: "100px",
}

const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "10px 20px",
}

const logoStyle = {
    height: "100%",
}

const searchStyle = {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    height: "100%",
    padding: "20px 0"
}

const myStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "110px",
    height: "100%",
}

const iconStyle = {
    width: "auto",
    height: "100%",
    padding: "5px"
}

const thumbStyle = (thumbnail) => {
    return {
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "50px",
        width: "50px",
        height: "50px",
        borderRadius: "50%"
    }
}

const clickMe = () => {
    window.location.replace('/user')
}

export default function Header() {
    const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const username = cookies.userInfo?.name;
    const thumbnail = cookies.userInfo?.thumb;

    const goHome = () => {
        window.location.href = "/main";
    }

    return (
        <div style={headerStyle}>
            <div style={wrapperStyle}>
                <img src={logo} style={logoStyle} onClick={goHome}/>
                <div style={searchStyle}>
                    <BsSearch style={iconStyle} />
                    <InputGroupComponent props="검색" />
                </div>
                <div style={myStyle} onClick={clickMe}>
                    <div>{username}</div>
                    <div style={thumbStyle(thumbnail)} />
                </div>
            </div>
        </div>
    )
}