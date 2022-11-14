import { Button } from "react-bootstrap";
import Header from "../components/header";
import "../styles/Layouts/mainTab.scss";

const layoutStyle = {
    width: "100%",
    height: "100%"
}

const mainStyle = {
    width: "100%",
    height: "calc(100% - 100px)",
    background: "#22223B"
}

const toolbarBtnStyle = {
    border: "0",
    borderRadius: "inherit",
    boxShadow: "0",
}

const hotMovieStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "cetner",
    width: "100%",
    height: "5%",
    background: "#FFFFFF",
    color: "white",
    opacity: "0.3"
}

// 컴포넌트를 쓸때 레이아웃은 태그 안에 template이 들어가는데
// 그 템플릿 전체를 받는 자료형이 children이다.

export default function LayoutComponent(props) {
    const go = (route) => {
        window.location.href = route;
    };

    return (
        <div style={layoutStyle}>
            <Header />
            <div style={hotMovieStyle}>
                <Button style={toolbarBtnStyle} variant="outline-dark" onClick={() => { go("/main") }}>홈</Button>
                <Button style={toolbarBtnStyle} variant="outline-dark" onClick={() => { go("/drama") }}>드라마</Button>
                <Button style={toolbarBtnStyle} variant="outline-dark" onClick={() => { go("/movie") }}>영화</Button>
                <Button style={toolbarBtnStyle} variant="outline-dark" onClick={() => { go("/anime") }}>애니메이션</Button>
                <Button style={toolbarBtnStyle} variant="outline-dark" onClick={() => { go("/other") }}>그 외</Button>
            </div>
            <main style={mainStyle}>
                {props.children}
            </main>
        </div>
    )
}