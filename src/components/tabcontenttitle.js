import { Row, Col } from "react-bootstrap";
import PosterComponent from "./postercomponent";
import "../styles/Components/inputComponent.scss"
import ReviewComponent from "./reviewcomponent";
import { loadMovieData } from '../apis/api/movie';

const mainStyle = {
    width: "100%",
    height: "90%",
    marginBottom: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const colStyle = {
    width: "100%",
    height: "100%",
    padding: "50px 0"
}

export default function TabContentTitle(tabs) {
    if (tabs.num === "0") {
        return (
            <div style={mainStyle}>
                <ReviewComponent movieComment={tabs.movieComment} />
            </div>
        );
    } else if (tabs.num === "1") {
        return (
            <div style={mainStyle}>
                <div style={colStyle}>
                    <PosterComponent name="영화제목1" />
                </div>
                <div style={colStyle}>
                    <PosterComponent name="영화제목2" />
                </div>
                <div style={colStyle}>
                    <PosterComponent name="영화제목3" />
                </div>
            </div>
        );
    }
}