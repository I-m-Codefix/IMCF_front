import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";
import { useQueries, useQuery } from "react-query";
import { loadMovieComment } from '../apis/api/movie';
import { useCookies } from 'react-cookie';
import { useParams } from "react-router";

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

const reviewList = (reviewData) => {
    console.log("받은 데이터 : ", reviewData);
    if (reviewData !== undefined){
        return (
            <div style={rowStyle}>
                {reviewData.map((item) => {(
                    <div key={item.id} style={colStyle}>
                        <p>
                            ID : {item.id}<br />
                            Name : {item.writerName}<br />
                            content : {item.content}<br />
                        </p>
                        {() => {
                            if(item.subCommentList.length >= 1) {
                                item.subCommentList.map((subComment) => {
                                    <div key={subComment.id}>
                                        {/* 
                                            ... 
                                            모양을 보아하니 재귀함수다.
                                            그럼 재귀 함수로 계속 호출해서 컴포넌트 생성하는거 만들어야 겠지?
                                            FaceBook 답글남기기 기능이 재귀 컴포넌트 생성임.
                                            예제 있을 거니까 보고 테스트 채널에다가 따라하면서 완성해와.
                                            
                                        */}
                                    </div>
                                });
                            }
                        }}
                    </div>
                )})}
            </div>
        );
    } else {
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