
import { useRef, useState, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [nextDisabled, setNextDisabled] = useState(false);

    const pageRef = useRef(1);

    useEffect(() => {
        getUsers();
    }, []);

    const nextPage = () => {
        pageRef.current++;
        getUsers();
    }

    const prevPage = () => {
        pageRef.current--;
        getUsers();
    }

    const getUsers = async () => {
        try {
            const { data } = await reqResApi.get<ReqResList>('/users', {
                params: {
                    page: pageRef.current,
                }
            });

            setNextDisabled(pageRef.current === data.total_pages);
            setUsers(data.data);

        } catch (error) {
            console.log(error);
        }
    }

    return { users, getUsers, pageRef, nextDisabled, nextPage, prevPage }
}

export default useUsers;