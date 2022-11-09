import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import { useQueries, useQuery } from "react-query";
import { loadMovieComment } from '../apis/api/movie';
import { useCookies } from 'react-cookie';
import { useParams } from "react-router";
import Subreviewcomponent from "./Subreviewcomponent";

const rowStyle = {
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
}

const commentStyle = {
    display: "flex",
    width: "100%",
    height: "12%",
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

const colStyle = {
    width: "200px",
    height: "100%"
}

const buttonboxStyle = {
    display: "flex",
    width: "30%",
    height: "100%"
}

const profileimg = {
    display: "flex",
    width: "50px",
    height: "50px",
}

const boxStyle = {
    width: "400px",
    height: "700px",
    border: "1px solid red",
    background: "white"
}

const reviewList = (reviewData) => {
    const loadreview =()=> (reviewData.reply.map((comment) => {
        return (
            <div key={comment.id}>
                <div>
                    {/* 프로필 이미지 */}
                    <div style={profileimg}>{comment.writerProfileImageUri}</div>
                    {/* 작성자 이름 */}
                    {comment.writerName}
                    <br />
                    {/* 코멘트 */}
                    {comment.content}
                    <br/>
                    {/* 대댓글 */}
                    <Subreviewcomponent reply={comment.subCommentList} />
                </div>
            </div>
        )
    }))
    if (reviewData !== undefined) return (
        <div style={boxStyle}>
            {loadreview()}
        </div>
    )
    else {
        return (
            <div style={rowStyle}>
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
            <div style={rowStyle}>
                <div style={reviewListStyle}>
                    리뷰 리스트
                </div>
                {reviewList(data)}
                <div style={commentStyle}>
                    <div style={inputboxStyle}>
                        <InputGroupComponent placeholder="리뷰작성"></InputGroupComponent>
                    </div>
                    <div style={buttonboxStyle}>
                        <ButtonComponent btn_text="작성" btn_link="/infomovie" /><br />
                    </div>
                </div>
            </div>
        )
    }
}