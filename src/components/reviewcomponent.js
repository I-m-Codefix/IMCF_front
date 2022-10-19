import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";

const rowStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "10px"
}

const reviewList = {
    width: "100%",
    height: "88%",
    padding: "10px",
}

const commentStyle = {
    display: "flex",
    width: "100%",
    height: "12%",
}

const inputboxStyle = {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px"
}

const buttonboxStyle = {
    display: "flex",
    width: "30%",
    height: "100%"
}

export default function ReviewComponent(props) {
    return (
        <div style={rowStyle}>
            <div style={reviewList}>
                리뷰 리스트
            </div>
            <div style={commentStyle}>
                <div style={inputboxStyle}>
                    <InputGroupComponent placeholder="리뷰작성"></InputGroupComponent>
                </div>
                <div style={buttonboxStyle}>
                    <ButtonComponent btn_text="작성" btn_link="/infomovie" /><br />
                </div>
            </div>
        </div>
    )
}