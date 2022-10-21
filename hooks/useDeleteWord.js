import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {API_URL} from "@env"
import { AuthContext } from '../contexts/AuthProvider';


const useDeleteWord = () => {
    const [id, setId] = useState(id);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [navigation, setNavigation] = useState(null);

    const auth = useContext(AuthContext);

    useEffect(() => {
        if (id && navigation) {
            setError('');
            setLoading(true);
            axios
                .delete(`${API_URL}/api/words/delete/${id}`, {
                    headers: {
                        'Authorization': auth.token
                    }
                })
                .then(res => {
                    console.log(res.data.msg)
                    auth.getWords()
                    setLoading(false);
                    navigation.navigate('My Words')
                })
                .catch(err => {
                    console.log(err)
                    setError(err.response.data.msg);
                    setLoading(false);
                })
        }

        return  () => {
            setId('')
        }
    }, [id, navigation])

    return {
        deleteWord: (id, navigation) => {
            setId(id);
            setNavigation(navigation)
        },
        loading,
        error,
        setError
    };
};

export default useDeleteWord
