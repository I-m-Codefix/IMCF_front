import { Container } from "react-bootstrap";
import TabLayoutComponent from "../layouts/TabLayoutComponent";
import PosterComponent from "../components/postercomponent";
import { useCookies } from 'react-cookie';
import { useQueries } from "react-query";
import { loadMovie } from '../apis/api/movie';

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    overflowY: "auto"
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

const categoryTitleStyle = {
    color: "white",
    padding: "12px 48px",
    borderTop:  "1px solid #3F3F3F",
    borderBottom:  "1px solid #3F3F3F"
}

const categoryList = (movieData) => {
    console.log(movieData);
    return (
        <div style={rowStyle}>
            {movieData.map((item) => (
                <div key={item.id} style={colStyle}><PosterComponent name={item.ottName} thumbnail={item.ottThumbnail} post_link={`/infomovie/${item.id}`} /></div>
            ))}
        </div>
    );
}

export default function Animepage() {
    const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const token = cookies.userInfo.token;
    const result = useQueries([
        {
            queryKey: "action", 
            queryFn: () => loadMovie(token, 12)
        },
        {
            queryKey: "comic", 
            queryFn: () => loadMovie(token, 13)
        }
    ]);

    const loadingFinishAll = result.some(result => result.isLoading);

    // 여기서 useQuery로 불러온 (멀티 불러오기 = useQueries 사용)
    // 데이터를 가공하여 마지막에 return 에서 뿌려주면 됨.

    if (loadingFinishAll) {
        return (<span>Loading...</span>);
    } else {
        return (
            <TabLayoutComponent>
                <div style={mainStyle}>
                    <Container style={movieBox}>
                        <div style={categoryTitleStyle}>액션</div>
                            {categoryList(result[0].data)}
                        <div style={categoryTitleStyle}>코미디</div>
                            {categoryList(result[1].data)}
                    </Container>
                </div>
            </TabLayoutComponent>
        );
    }
}