import Subreviewtest from "./Subreviewtest";

const boxStyle = {
    width: "400px",
    height: "700px",
    border: "1px solid red",
    background: "white"
}
// const profile = {
//     width: "40px",
//     height: "40px",
//     background: "black"
// }

export default function Reviewtest(props) {
    const loadreview =()=> (props.reply.map((comment) => {
        return (
            <div key={comment.id}>
                <div>
                    {comment.writerName}
                    <br />
                    {comment.content}
                    <br/>
                    <Subreviewtest reply={comment.subCommentList} />
                </div>
            </div>
        )
    }))
    return (
        <div style={boxStyle}>
            {loadreview()}
        </div>
    )
}