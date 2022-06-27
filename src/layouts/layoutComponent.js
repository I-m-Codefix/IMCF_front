import Header from "../components/header";

const layoutStyle = {
    width: "100%",
    height: "100%"
}

const mainStyle = {
    width: "100%",
    height: "calc(100% - 100px)",
    background: "#22223B"
}

// 컴포넌트를 쓸때 레이아웃은 태그 안에 template이 들어가는데
// 그 템플릿 전체를 받는 자료형이 children이다.

export default function LayoutComponent(props) {
    return (
        <div style={layoutStyle}>
            <Header />
            <main style={mainStyle}>
                {props.children}
            </main>
        </div>
    )
}