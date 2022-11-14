import VideoToolbar from "../components/VideoToolbar";

const layoutStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden"
}

const mainStyle = {
    position: "absolute",
    top: "48px",
    width: "100%",
    height: "calc(100% - 48px)",
}

// 컴포넌트를 쓸때 레이아웃은 태그 안에 template이 들어가는데
// 그 템플릿 전체를 받는 자료형이 children이다.

export default function LayoutComponent(props) {
    return (
        <div style={layoutStyle}>
            <VideoToolbar />
            <main style={mainStyle}>
                {props.children}
            </main>
        </div>
    )
}