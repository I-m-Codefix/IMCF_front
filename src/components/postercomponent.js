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

export default function PosterComponent(post, post_link) {
    return (
        <div style={posterStyle} href={post_link}>
            <div style={imgStyle}>
                <div>영화 이미지</div>
            </div>
            <div style={movieTitle}>{post.name}</div>
        </div>
    )
}