import { Image } from "react-bootstrap";

export default function MoviePosterComponent({ props, title }) {
    const imgasd = props;
    const movietitle = title;
    return (
        <Image>
            {imgasd}
            {movietitle}
        </Image>
    )
}