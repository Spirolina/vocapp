import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useDictionary = () => {
    const [word, setWord] = useState('');
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (word) {
            setLoading(true);
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(res => {
                    setLoading(false);
                    setWords(res.data);
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err);
                })
        }
    },[word])
  
    return {
        getDictionary: (word) => {
            setWord(word);
            },
        loading,
        words,
    }
}
