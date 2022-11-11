import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import { useQuery } from "react-query";
import { loadMovieComment } from '../apis/api/movie';
import { useCookies } from 'react-cookie';
import Subreviewcomponent from "./Subreviewcomponent";
import { useEffect } from "react";

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "10px"
}

const reviewListStyle = {
    width: "100%",
    height: "88%",
    padding: "10px",
    boder: "4px solid red",
    overflow: "auto"
}

const reviewStyle = {
    width: "100%",
    minHeight: "128px"
}

const commentStyle = {
    display: "flex",
    width: "100%",
    height: "80px",
    margin: "16px 0",
    padding: "8px",
    border: "1px solid #030303",
    background: "#F3F3F3"
}

const editCommentStyle = {
    display: "flex",
    width: "100%",
    padding: "16px 0",
    margin: "32px 0 0 0",
    border: "1px solid #030303",
}

const inputboxStyle = {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px"
}

const buttonboxStyle = {
    display: "flex",
    width: "30%",
    height: "100%"
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

const reviewList = (reviewData) => {
    const loadreview =()=> (reviewData && reviewData.map((comment) => {
        if (comment.subCommentList.length <= 0) {
            return (
                <div key={comment.id} style={reviewStyle}>
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
            );
        } else {
            return (
                <div key={comment.id} style={reviewStyle}>
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
                    {/* 대댓글 */}
                    <Subreviewcomponent reply={comment.subCommentList} num={0} />
                </div>
            )
        }
    }))
    if (reviewData !== undefined) return (
        <div style={boxStyle}>
            {/* 댓글 출력 */}
            {loadreview()}
        </div>
    )
    else {
        return (
            <div style={mainStyle}>
                <span>아직 리뷰가 작성되지 않았습니다.</span>
            </div>
        );
    }
}

export default function ReviewComponent(props) {
    const [cookies, getCookies, removeCookie] = useCookies(['userInfo']);
    const token = cookies.userInfo.token;
    const { isLoading, isError, data } = useQuery("result", () => loadMovieComment(token, props.movieNum), {
        retry: 0,
    });

    if (isError) {
        return (<span>Error: {isError.message}</span>);
    }

    if (isLoading) {
        return (<span>Loading...</span>);
    } else {
        return (
            <div style={mainStyle}>
                <div style={reviewListStyle}>
                    {reviewList(data)}
                </div>
                <div style={editCommentStyle}>
                    <div style={inputboxStyle}>
                        <InputGroupComponent placeholder="리뷰작성"></InputGroupComponent>
                    </div>
                    <div style={buttonboxStyle}>
                        <ButtonComponent btn_text="작성" />
                    </div>
                </div>
            </div>
        )
    }
}