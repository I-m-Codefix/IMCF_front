import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const posterStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const imgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "100%",
    background: "yellow",
}

const movieTitle = {
    color: "white"
}

export default function PosterComponent(post) {
    const go = (link) => {
        window.location.href = link;
    }
    return (
        <div style={posterStyle} onClick={() => go(post.post_link)}>
            <div style={imgStyle}>
                <div>영화 이미지</div>
            </div>
            <div style={movieTitle}>{post.name}</div>
        </div>
    )
}