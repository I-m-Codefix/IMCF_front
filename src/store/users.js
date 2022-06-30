import { useQuery } from 'react-query';
import { loadUser } from '../apis/api/user';

const Users = () => {
    const query = useQuery('users', loadUser);
    console.log('query : ', query);
    return 0;
}