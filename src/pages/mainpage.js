import { Container, Row, Col, Button } from "react-bootstrap";
import LayoutComponent from "../layouts/layoutComponent";
import PosterComponent from "../components/postercomponent";
import { useCookies } from 'react-cookie';
import { useQueries, useQuery } from "react-query";
import { loadMovie } from '../apis/api/movie';
import "../styles/Pages/mainpage.scss";

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    overflowY: "auto"
}

const hotMovieStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "cetner",
    width: "100%",
    height: "5%",
    background: "#FFFFFF",
    opacity: "0.3"
}

const rowStyle = {
    display: "flex",
    width: "100%",
    height: "200px",
    margin: "24px 0",
    overflowX: "auto"
}

const colStyle = {
    width: "200px",
    height: "100%"
}

const movieBox = {
    width: "100%",
    height: "95%",
    padding: "25px 0"
}

const whiteStyle = {
    color: "white"
}

const categoryTitleStyle = {
    color: "white",
    padding: "12px 48px",
    borderTop:  "1px solid #3F3F3F",
    borderBottom:  "1px solid #3F3F3F"
}

const toolbarBtnStyle = {
    border: "0",
    borderRadius: "inherit",
    boxShadow: "0",
}

const categoryList = (movieData) => {
    console.log(movieData);
    return (
        <div style={rowStyle}>
            {movieData.map((item) => (
                <div key={item.id} style={colStyle}><PosterComponent name={item.ottName} post_link={`/infomovie/${item.id}`} /></div>
            ))}
        </div>
    );
}

function Mainpage() {
    const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const token = cookies.userInfo.token;
    const result = useQueries([
        {
            queryKey: "documentary", 
            queryFn: () => loadMovie(token, 6)
        },
        {
            queryKey: "comic", 
            queryFn: () => loadMovie(token, 4)
        },
        {
            queryKey: "independent", 
            queryFn: () => loadMovie(token, 17)
        }
    ]);

    const loadingFinishAll = result.some(result => result.isLoading);

    // 여기서 useQuery로 불러온 (멀티 불러오기 = useQueries 사용)
    // 데이터를 가공하여 마지막에 return 에서 뿌려주면 됨.

    if (loadingFinishAll) {
        return (<span>Loading...</span>);
    } else {
        return (
            <LayoutComponent>
                <div style={mainStyle}>
                    <div style={hotMovieStyle}>
                        <Button style={toolbarBtnStyle} variant="outline-dark">홈</Button>
                        <Button style={toolbarBtnStyle} variant="outline-dark">드라마</Button>
                        <Button style={toolbarBtnStyle} variant="outline-dark">영화</Button>
                        <Button style={toolbarBtnStyle} variant="outline-dark">애니메이션</Button>
                    </div>
                    <Container style={movieBox}>
                        <div style={categoryTitleStyle}>드라마 - 다큐</div>
                        {categoryList(result[0].data)}
                        <div style={categoryTitleStyle}>드라마 - 코믹</div>
                        {categoryList(result[1].data)}
                        <div style={categoryTitleStyle}>영화 - 독립</div>
                        {categoryList(result[2].data)}
                    </Container>
                </div>
            </LayoutComponent>
        );
    }
}

export default Mainpage;