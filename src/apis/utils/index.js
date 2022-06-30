import axios from 'axios';

const SERVER_ADDRESS = "http://";

export const Axios = axios.create({
    baseURL: `{${SERVER_ADDRESS}}`,
    headers: {
        // 공통 헤더 입력
    }
});