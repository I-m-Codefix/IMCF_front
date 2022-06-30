// 영화 api 요청 및 응답
import { Axios } from '../utils/index';

// 영화 정보 가져오기
export const loadMovie = async () => {
    const res = await Axios.get('/movie');
    return res;
}