import axios from 'axios';

const SERVER_ADDRESS = "http://imcf.kr/api";

export const Axios = axios.create({
    baseURL: SERVER_ADDRESS,
    headers: {
        // 공통 헤더 입력
    }
});