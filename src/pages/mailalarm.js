import ButtonComponent from "../components/buttoncomponent";

const buttonboxStyle = {
    display: "flex",
    width: "30%",
}

function Mailalarm(tabs) {
    if (tabs.num === "0") {
        return (
            <div>
                <div>메일 인증이 성공했습니다.</div>
                <div div style={buttonboxStyle} >
                    <ButtonComponent btn_text="확인" btn_link="/main" />
                </div>
            </div>

        );
    } else if (tabs.num === "1") {
        return (
            <div>
                <div>메일 인증이 실패했습니다.</div>
                <div style={buttonboxStyle}>
                    <ButtonComponent btn_text="확인" btn_link="/main" />
                </div>
            </div>
        );
    }
}

export default Mailalarm;