// 영화 api 요청 및 응답
import { Axios } from '../utils/index';

// 영화 정보 가져오기
export const loadMovie = async (token, categoryId) => {
    //console.log("token = ", token);
    const res = await Axios.get(`/service/ott/stream?categoryId=${categoryId}`, {
        headers: {
            Authorization: token
        }
    });
    if (res.data.code === 200) {
        return res.data.results;
    } else {
        return res.data;
    }
}

export const loadMovieData = async (token, movieId) => {
    //console.log("token = ", token);
    const res = await Axios.get(`/service/ott/stream/${movieId}`, {
        headers: {
            Authorization: token
        }
    });
    if (res.data.code === 200) {
        return res.data.result;
    } else {
        return res.data;
    }
}

export const loadMovieComment = async (token, movieId) => {
    const res = await Axios.get(`/service/ott/commentStreaming/${movieId}`, {
        headers: {
            Authorization: token
        }
    });
    if (res.data.code === 200) {
        return res.data.result;
    } else {
        return res.data;
    }
}