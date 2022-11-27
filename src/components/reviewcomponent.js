import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import { useQueries , useQuery } from "react-query";
import { useCookies } from 'react-cookie';
import Subreviewcomponent from "./Subreviewcomponent";
import React, { useEffect, useState } from "react";
import { review, loadUser } from '../apis/api/user';
import { Card, Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { element, number } from "prop-types";

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "10px"
}

const reviewListStyle = {
    borderRadius: "8px",
    width: "100%",
    height: "100%",
    overflow: "auto"
}

const reviewStyle = {
    borderRadius: "8px",
    minHeight: "128px"
}

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

const editCommentStyle = {
    display: "flex",
    width: "100%",
    padding: "16px 0",
    margin: "32px 0 0 0"
}

const inputboxStyle = {
    border: "1px solid gray",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
}

const inputboxgroupStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 5px"
}

const buttonboxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

const btnStyle = {
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
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
    const movieNum = useParams();
    const [cookies, setCookie, getCookies, removeCookie] = useCookies(['userInfo']);
    const [content, setContent] = useState("");
    const token = cookies.userInfo.token;
    const changeContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }
    const creatReview = () => {
        loadUser(token).then(async (userId) => {
            const response = await review(
                token,
                {
                    content : content,
                    parent : null,
                    writer : {
                        id : userId
                    },
                    streaming : {
                        id : movieNum.movieId
                    }
                });
                if (response.code === 500) {
                    alert("쯧쯧");
                    return;
                }
                window.location.reload();
        });
    }
    return (
        <div style={mainStyle}>
            <div style={reviewListStyle}>
                {reviewList(props.movieComment)}
            </div>
            <div style={editCommentStyle}>
                <div style={inputboxgroupStyle}>
                    <input style={inputboxStyle} placeholder="리뷰작성" onChange={ (e) => changeContent(e) }/>
                </div>
                <div style={buttonboxStyle}>
                    <Button type="button" style={btnStyle} onClick={creatReview} >작성</Button>
                </div>
            </div>
        </div>
    )
}