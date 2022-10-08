import React, { useEffect, useState } from 'react'
import {API_URL} from "@env"
import axios from 'axios';
export const useWord = () => {
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .post(`${API_URL}/api/words/add`, {
                ...word
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[word])
  

    return {
        getWord: (myWord) => { 
            setWord(myWord)
        },
        loading, 
        error
    }
}
