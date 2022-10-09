import React, { useEffect, useState } from 'react'
import {API_URL} from "@env"
import axios from 'axios';
import { RNS3 } from 'react-native-aws3';
import uuid from 'react-native-uuid';


export const useWord = () => {
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    
       

    useEffect(() => {
        if (word) {
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
                  }

                RNS3.put(file, options).then(response => {
                    if (response.status !== 201)
                        throw new Error("Failed to upload image to S3");
                    console.log(response.body);
                    const imageUri = `s3://vocapp-spiriolina/uploads/${fileId}`
                    
                    axios
                        .post(`${API_URL}/api/words/add`, {
                            ...word, imageUri,
                        })
                        .then(res => {
                            console.log(res.data)
                        })
                        .catch(err => {
                            console.log(err)
                        });

                })
                
            }
        
            
        }
            
    },[word])
  

    return {
        getWord: (myWord) => { 
            setWord(myWord)
        },
        loading, 
        error
    }
}
