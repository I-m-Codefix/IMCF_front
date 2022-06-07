import Header from "./header";

const layoutStyle = {
    width: "100%",
    height: "100%"
}

const mainStyle = {
    width: "100%",
    height: "calc(100% - 100px)",
    background: "#22223B"
}

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