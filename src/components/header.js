import logo from "../assets/logo/logo_row.png";

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
    padding: "15px 20px",
    border: "1px solid red"
}

const logoStyle = {
    height: "100%",
}

const searchStyle = {

}

export default function Header() {
    return (
        <div style={headerStyle}>
            <div style={wrapperStyle}>
                <img src={logo} style={logoStyle}/>
                <div stlye={searchStyle}>
                    
                </div>
            </div>
        </div>
    )
}