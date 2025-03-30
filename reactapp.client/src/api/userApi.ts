import { useState, useEffect } from 'react';
import { User } from '../types/user'

interface useUserDataFromApi {
    users: User[];
    isLoading: boolean;
    error: Error | null;
}

const useUserDataFromApi = () => {
    const [userData, setUserData] = useState<useUserDataFromApi>({ users: [], isLoading: true, error: null });

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUserData({ users: data.results, isLoading: false, error: null });
            })
            .catch(error => {
                setUserData({ users: [], isLoading: false, error });
            });
    }, []);

    return userData;
};

export default useUserDataFromApi;