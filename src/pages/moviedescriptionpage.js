import { Card, Nav } from "react-bootstrap";
import { useState } from "react";
import LayoutComponent from "../layouts/layoutComponent";
import PosterComponent from "../components/postercomponent";
import ButtonComponent from "../components/buttoncomponent";
import TabContentTitle from "../components/tabcontenttitle";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    width: "100%",
    height: "100%",
}

const rowStyle = {
    height: "100%",
    width: "100%",
    padding: "10px"
}

const movieBox = {
    display: "flex",
    width: "200px",
    height: "200px"
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const labelStyle = {
    color: "white",
    padding: "0 10px 0 0"
}

const headStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
}

const infoStyle = {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "350px",
    flexDirection: "column"
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}
const chageBox = {
    border: "1px solid red",
    display: "flex",
    width: "100%",
}

function TabContent(props) {
    if (props.clickedTab === 0) {
        return (<TabContentTitle className="mt-5" num = "0" /> );
    } else if (props.clickedTab === 1){
        return (<TabContentTitle className="mt-5" num = "1"/> );
    }
}

function Moviedescriptionpage() {
    let [clickedTab, setClickedTab] = useState(0);
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={headStyle}>
                        <div style={movieBox}>
                            <div style={rowStyle}>
                                <PosterComponent name="영화제목" />
                            </div>
                        </div>
                        <div style={infoStyle}>
                            <label style={labelStyle}>감독 이름</label>
                            <label style={labelStyle}>출연진</label>
                            <label style={labelStyle}>영화 설명</label>
                        </div>
                    </div>
                    <div style={chageBox}>
                        <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
                            <Nav.Item>
                                <Nav.Link eventKey="0" onClick={()=>{setClickedTab(0)}}>리뷰 작성</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="1" onClick={()=>{setClickedTab(1)}}>관련 영화</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent clickedTab={clickedTab} />
                    </div>
                    <div style={buttonwrapper}>
                        <ButtonComponent btn_text="뒤로가기" btn_link="/main" />
                        <ButtonComponent btn_text="재생" btn_link="playscreen_fullpage" />
                    </div>
                </Card>
            </div>
        </LayoutComponent >
    );

}

export default Moviedescriptionpage;