import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";

const rowStyle = {
    height: "50%",
    padding: "10px"
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

export default function ReviewComponent(props) {
    return (
        <div style={rowStyle}>
            <div style={inputboxStyle}>
                <InputGroupComponent placeholder="리뷰작성"></InputGroupComponent>
            </div>
            <div style={buttonboxStyle}>
                <ButtonComponent btn_text="작성" btn_link="/infomovie" /><br />
            </div>
        </div>
    )
}