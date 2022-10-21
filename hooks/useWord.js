import React, { useContext, useEffect, useState } from 'react'
import {API_URL} from "@env"
import axios from 'axios';
import { RNS3 } from 'react-native-aws3';
import uuid from 'react-native-uuid';
import { AuthContext } from '../contexts/AuthProvider';


export const useWord = ({navigation}) => {
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (word) {
            setError(false)
            setLoading(true);
            if (word.imgUri) {
                const fileId = uuid.v4();
                const file = {
                    uri: word.imgUri,
                    name: fileId,
                    type: "image/png"
                }
                const options = {
                    keyPrefix: "uploads/",
                    bucket: "vocapp-spiriolina",
                    region: "eu-central-1",
                    accessKey: "AKIAQLWKAH4YCVCIKLCX",
                    secretKey: "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",
                    successActionStatus: 201
                };

                RNS3.put(file, options).then(response => {
                    if (response.status !== 201)
                        throw new Error("Failed to upload image to S3");
                    axios
                        .post(`${API_URL}/api/words/add`, {
                            ...word, imageUri: response.body.postResponse.location,
                        },
                            {
                                headers: {
                                    'Authorization': auth.token
                            }}
                        )
                        .then(res => {
                            auth.getWords()
                            navigation.navigate('My Words')
                            setLoading(false);

                        })
                        .catch(err => {

                            setError(err.response.data.msg)
                            setLoading(false);
                        });

                });
                return;
            };

            axios
                .post(`${API_URL}/api/words/add`, {
                            ...word
                        },
                            {
                                headers: {
                                    'Authorization': auth.token
                            }}
                        )
                        .then(res => {
                            setLoading(false);
                            auth.getWords()
                            navigation.navigate('My Words')


                        })
                .catch(err => {
                            setError(err.response.data)
                            setLoading(false);
                        });
        };
    }, [word]);

    return {
        getWord: (myWord) => {
            setWord(myWord)
        },
        loading,
        error
    }
}
