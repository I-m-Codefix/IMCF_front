// 유저 api 요청 및 응답
import { Axios } from '../utils/index';

export const signup = async (userData) => {
    const res = await Axios.post('/account/signup', {
        name: userData.name,
        password: userData.password,
        email: userData.email,
        platformType: "IMCF",
        platformImage: ""
    });
}

// 유저 정보 가져오기
export const loadUser = async (token) => {
    //console.log("token = ", token);
    console.log("로드유저 발동!");
    const res = await Axios.get('/account/info', {
        headers: {
            Authorization: token
        }
    });
    if (res.data.code === 200) {
        return res.data.id;
    } else {
        return res.data.id;
    }
}

// 댓글작성
export const review = async (token, data) => {
    const res = await Axios.post('/service/ott/comment', data,{
        headers: {
            Authorization: token
        }
    });
    return res;
}


// 로그인
export const login = async (data) => {
    try {
        const res = await Axios.post('/login/oauth2/service', data);
        return res;
    } catch (err) {
        const errorResponse = {
            code: 500,
            message: "잘못된 로그인 요청입니다."
        }
        return errorResponse;
    }
}

// 로그아웃
export const logout = async (data) => {
    const res = await Axios.post('/logout', data);
    return res;
}