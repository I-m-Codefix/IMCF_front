import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const posterStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "100%",
}

const imgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "100%",
}

const imgSrc = {
    width: "100%",
    height: "160px"
}

const movieTitle = {
    color: "white",
    padding: "8px"
}

export default function PosterComponent(post) {
    const go = (link) => {
        window.location.href = link;
    }
    return (
        <div style={posterStyle} onClick={() => go(post.post_link)}>
            <div style={imgStyle}>
                <img style={imgSrc} src={post.thumbnail} alt="이미지 로딩.." border="0" />
            </div>
            <div style={movieTitle}>{post.name}</div>
        </div>
    )
}