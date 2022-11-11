import React from 'react'

const boxStyle = {
    display: "flex",
    width: "100%",
    height: "50px",
}

export default function Subreviewcomponet(props) {
    const renderReview = () => (props.reply.map((comment) => {
        return (
            <div key={comment.id}>
                <div>
                    {comment.writerName}
                    <br />
                    {comment.content}
                    <br/>
                    <Subreviewcomponet reply={comment.subCommentList} />
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
