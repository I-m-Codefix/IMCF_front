import React from 'react'

const commentStyle = {
    whitespace: "pre-wrap",
    borderRadius: "8px",
    display: "flex",
    width: "100%",
    height: "fit-content",
    margin: "16px 0",
    padding: "8px",
    color: "#F3F3F3",
    background: "#9A8C98",
    marginBottom: "20px"
}

const reviewStyle = (count) => {
    let num;

    if (count >= 4) num = 4;
    else num = count;

    const margins = (64 * num).toString() + "px";
    
    return {
        width: `calc(100% - ${margins})`,
        minHeight: "128px",
        margin: `0 0 0 ${margins}`
    }
}

const profileStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "48px"
}

const profileimg = {
    display: "flex",
    border: "1px solid #030303",
    borderRadius: "25px",
    width: "48px",
    height: "48px",
    margin: "0 16px 0 8px"
}

const profileName = {
    textAlign: "center",
    color: "white",
    border: "1px solid #3F3F3F",
    borderRadius: "8px",
    padding: "5px"
}

const boxStyle = {
    width: "100%",
    height: "auto",
}

export default function Subreviewcomponet(props) {
    let num = props.num + 1;
    const renderReview = () => (props.reply.map((comment) => {
        if (comment.subCommentList.legnth <= 0) {
            return (
                <div key={comment.id} style={reviewStyle(num)}>
                    {/* 프로필 이미지 */}
                    <div style={profileStyle}>
                        <img 
                            style={profileimg}
                            src={comment.writerProfileImageUri}
                        />
                        {/* 작성자 이름 */}
                        <div style={profileName}>
                            {comment.writerName}
                        </div>
                    </div>
                    {/* 코멘트 */}
                    <div style={commentStyle}>
                        {comment.content}
                    </div>
                </div>
            )
        } else {
            return (
                <div key={comment.id} style={reviewStyle(num)}>
                    {/* 프로필 이미지 */}
                    <div style={profileStyle}>
                        <img 
                            style={profileimg}
                            src={comment.writerProfileImageUri}
                        />
                        {/* 작성자 이름 */}
                        <div style={profileName}>
                            {comment.writerName}
                        </div>
                    </div>
                    {/* 코멘트 */}
                    <div style={commentStyle}>
                        {comment.content}
                    </div>
                    <Subreviewcomponet reply={comment.subCommentList} num={num} />
                </div> 
            )
        }
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
