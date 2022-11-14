// 유저 api 요청 및 응답
import { Axios } from '../utils/index';

export const signup = async (userData) => {
    const res = await Axios.post('', {
        name: userData.name,
        password: userData.password,
        email: userData.email,
        platformType: "IMCF",
        platformImage: ""
    });
}

// 유저 정보 가져오기
export const loadUser = async () => {
    const { data } = await Axios.get('/user');
    return data;
}

// 로그인
export const login = async (data) => {
    const res = await Axios.post('/login', data);
    return res;
}

// 로그아웃
export const logout = async (data) => {
    const res = await Axios.post('/logout', data);
    return res;
}