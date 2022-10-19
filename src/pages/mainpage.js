import { Container, Row, Col } from "react-bootstrap";
import LayoutComponent from "../layouts/layoutComponent";
import PosterComponent from "../components/postercomponent";
import { useCookies } from 'react-cookie';
import { Axios } from "../apis/utils/index";

const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const rowStyle = {
    height: "50%",
    padding: "10px"
}

const movieBox = {
    height: "50%"
}

const whiteStyle = {
    color: "white"
}

const serviceList = async (token) => {
    const response = await Axios.get('/service/ott/stream?categoryId=6', {
        headers: {
            Authorization: token,
        }
    });
    //console.log(response);
    return response.data.results;
};

function Mainpage() {
    /*const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const token = cookies.userInfo.token;
    console.log(token);*/

    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Container style={movieBox}>
                    <Row style={rowStyle}>
                        <Col><PosterComponent name="영화제목1" post_link="/infomovie/영화제목1"/></Col>
                        <Col><PosterComponent name="영화제목2" post_link="/infomovie/영화제목2"/></Col>
                        <Col><PosterComponent name="영화제목3" post_link="/infomovie/영화제목3" /></Col>
                        <Col><PosterComponent name="영화제목4" post_link="/infomovie/영화제목4" /></Col>
                        <Col><PosterComponent name="영화제목5" post_link="/infomovie/영화제목5" /></Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col><PosterComponent name="영화제목6" post_link="/infomovie/영화제목6" /></Col>
                        <Col><PosterComponent name="영화제목7" post_link="/infomovie/영화제목7" /></Col>
                        <Col><PosterComponent name="영화제목8" post_link="/infomovie/영화제목8" /></Col>
                        <Col><PosterComponent name="영화제목9" post_link="/infomovie/영화제목9" /></Col>
                        <Col><PosterComponent name="영화제목10" post_link="/infomovie/영화제목10" /></Col>
                    </Row>
                </Container>
            </div>
        </LayoutComponent>
    );
}

export default Mainpage;