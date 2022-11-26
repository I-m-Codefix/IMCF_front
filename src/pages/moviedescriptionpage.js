import { Card, Nav } from "react-bootstrap";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import LayoutComponent from "../layouts/layoutComponent";
import PosterComponent from "../components/postercomponent";
import ButtonComponent from "../components/buttoncomponent";
import TabContentTitle from "../components/tabcontenttitle";
import { useParams } from "react-router";
import { loadMovieData, loadMovieComment } from '../apis/api/movie';
import { useQueries } from "react-query";
import ReviewComponent from "../components/reviewcomponent";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const rowStyle = {
    display: "flex",
    height: "100%",
    width: "100%",
}

const movieBox = {
    display: "flex",
    width: "200px",
    height: "100%"
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "90%",
    padding: "50px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const labelStyle = {
    color: "white",
    padding: "0 10px 0 0"
}

const colStyle = {
    width: "200px",
    height: "100%"
}

const headStyle = {
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "space-between",
}

const infoStyle = {
    justifyContent: "center",
    display: "flex",
    width: "350px",
    flexDirection: "column"
}

const buttonwrapper = {
    display: "flex",
    width: "100%",
    height: "7%",
    padding: "5px"
}
const chageBox = {
    width: "100%",
    height: "68%"
}

const navStyle = {
    marginTop: 20,
    height: "auto"
}

function TabContent(props) {
    if (props.clickedTab === 0) {
        return (<TabContentTitle num="0" movieComment={props.movieComment} />);
    } else if (props.clickedTab === 1) {
        return (<TabContentTitle num="1"/>);
    }
}


function Moviedescriptionpage() {
    let [clickedTab, setClickedTab] = useState(0)
    const movieNum = useParams();
    const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const token = cookies.userInfo.token;
    const result = useQueries([
        {
            queryKey: "moviedata", 
            queryFn: () => loadMovieData(token, movieNum.movieId)
        },
        {
            queryKey: "movieComment", 
            queryFn: () => loadMovieComment(token, movieNum.movieId)
        }
    ]);

    const loadingFinishAll = result.some(result => result.isLoading);

    if (loadingFinishAll) {
        return (<span>Loading...</span>);
    } else {
        console.log("moviedata", result[0]);
        console.log("movieComment", result[1]);
        return (
            <LayoutComponent>
                <div style={mainStyle}>
                    <Card style={cardStyle}>
                        <div style={headStyle}>
                            <div style={movieBox}>
                                <div style={rowStyle}>
                                    <PosterComponent thumbnail={result[0].data.ottThumbnail} post_link={`/infomovie/${result[0].data.id}`} />
                                </div>
                            </div>
                            <div style={infoStyle}>
                                <label style={labelStyle}>제목 : {result[0].data.ottName}  ({result[0].data.playTime})</label>
                                <label style={labelStyle}>감독 : {result[0].data.ottDesc}</label>
                                <label style={labelStyle}>영화설명 : {result[0].data.ottDescDetail}</label>
                            </div>
                        </div>
                        <div style={chageBox}>
                            <Nav style={navStyle} variant="tabs" defaultActiveKey="0" >
                                <Nav.Item variant="a">
                                    <Nav.Link eventKey="0" onClick={() => { setClickedTab(0) }}>리뷰 작성</Nav.Link>
                                </Nav.Item>
                                <Nav.Item variant="a">
                                    <Nav.Link eventKey="1" onClick={() => { setClickedTab(1) }}>관련 영화</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent clickedTab={clickedTab} movieComment={result[1].data}/>
                        </div>
                        <div style={buttonwrapper}>
                            <ButtonComponent btn_text="뒤로가기" btn_link="/main" />
                            <ButtonComponent btn_text="재생" btn_link={`/play/${movieNum.movieId}`} />
                        </div>
                    </Card>
                </div>
            </LayoutComponent >
        );
    }
}

export default Moviedescriptionpage;