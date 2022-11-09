import React from 'react'

const boxStyle = {
    width: "400px",
    height: "50px",
    border: "1px solid black",
    background: "white"
}

export default function Subreviewtest(props) {
    const renderReview = () => (props.reply.map((comment) => {
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
    if (props.reply.length <= 0) {
        return;
    }
    return (
        <div style={boxStyle}>
            {renderReview()}
        </div>
    )
}
