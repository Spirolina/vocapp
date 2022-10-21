import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from "@env"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [usernameError, setusernameError] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [wordsLoading, setWordsLoading] = useState(false);
  const [wordsError, setWordsError] = useState('')
  const [words, setWords] = useState([]);


  useEffect(() => {
    const fetchUser = async () => {
      const userStr = await AsyncStorage.getItem('user')
      const tokenStr = await AsyncStorage.getItem('token')
      if (tokenStr && userStr) {
        setUser(JSON.parse(userStr))
        setToken(JSON.parse(tokenStr))
      }
    };

    try {
      fetchUser();
    } catch (e) {
      console.log(e)
    }

  }, []);

  useEffect(() => {
    getWords();
  }, [token]);

  const getWords = () => {
    if (token) {
      setWordsLoading(true);
      axios
        .get(`${API_URL}/api/words/all`, {
          headers: {
            'Authorization': token.token,
          }
        })
        .then(res => {
          setWords(res.data.words);
          setWordsLoading(false);
        })
        .catch(err => {
          setWordsError(err.response.data.msg);
          setWordsLoading(false);
        })
    }
  }

  const login = (username, password) => {
    setPasswordError('');
    setusernameError('');
    setLoginLoading(true);
    axios
    .post(`${API_URL}/api/users/login`,
      {
      username,
      password
      })
    .then( async res  => {
      setUser(res.data.payload);
      setToken(res.data.token);
      setLoginLoading(false);

      try {
       await AsyncStorage.setItem('user', JSON.stringify(res.data.payload))
       await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
      } catch (e) {
        console.log(e)
      }
      
      
    })
      .catch(err => {
        if (err.response.data.errorType === 'username') {
          setusernameError(err.response.data.msg);
        }

        if (err.response.data.errorType === 'password') {
          setPasswordError(err.response.data.msg);
        }
        setLoginLoading(false);
    })
  }

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('password');
      setUser(null);
      setToken(null);
    } catch (e) {
      console.log(e)
    }
    
  }

  const register = (username, password) => {
    setPasswordError('');
    setusernameError('');
    setRegisterLoading(true);
    axios
      .post(`${API_URL}/api/users/register`,
        {
        username,
        password
        })
      .then( async res => {
        setUser(res.data.payload);
        setToken(res.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(res.data.payload))
        await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
        setRegisterLoading(false)
      })
      .catch(err => {
        if (err.response.data.errorType === 'username') {
          setusernameError(err.response.data.msg);
        }

        if (err.response.data.errorType === 'password') {
          setPasswordError(err.response.data.msg);
        }
        setRegisterLoading(false);
      })
  }

  const value = {
    user,
    token: token?.token,
    register,
    signOut,
    login,
    registerLoading,
    authUsernameError: usernameError,
    authPasswordError: passwordError,
    loginLoading,
    words,
    wordsError,
    wordsLoading,
    getWords
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
}
