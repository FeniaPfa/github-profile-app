import { useEffect, useState } from 'react';
import { getData } from '../services/getUser';

export const useUser = (user) => {
    const [userData, setUserData] = useState('');
    const [notFound, setNotFound] = useState(false);

    const getUser = async () => {
        const userData = await getData(user);
        if (user === 'octocat') {
            localStorage.setItem('octocat', JSON.stringify(userData));
        }

        if (userData === 'Error') {
            const storedUser = localStorage.getItem('octocat');
            const parsedUser = JSON.parse(storedUser);
            setUserData(parsedUser);
            setNotFound(true);
        } else {
            setUserData(userData);
            setNotFound(false);
            console.log(userData);
        }
    };

    useEffect(() => {
        getUser(user);
    }, [user]);

    return { userData, notFound };
};
