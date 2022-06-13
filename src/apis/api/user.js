// 유저 api 요청 및 응답
import { Axios } from '../utils/index';

// 유저 정보 가져오기
export async function loadUser() {
    const res = await Axios.get('/user');
    return res;
}

// 로그인
export async function login(data) {
    const res = await Axios.post('/login', data);
    return res;
}

// 로그아웃
export async function logout(data) {
    const res = await Axios.post('/logout', data);
}