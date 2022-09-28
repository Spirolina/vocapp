import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
      const userStr = await AsyncStorage.getItem('user')
      const tokenStr = await AsyncStorage.getItem('token')
      console.log(userStr);
      console.log(tokenStr);
      if (tokenStr && userStr) {
        setUser(JSON.parse(userStr))
        setToken(JSON.parse(tokenStr))
      }
      
    };
    
    try {
      fetchUser();
    } catch(e) {
      console.log(e)
    }
    

  }, [])
  
  
 const login =  (username, password) => {
    axios
    .post("http://192.168.43.48:5000/api/users/login",
      {
      username,
      password
      })
    .then( async res  => {
      setUser(res.data.payload);
      setToken(res.data.token);
      try {
       await AsyncStorage.setItem('user', JSON.stringify(res.data.payload))
       await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
      } catch (e) {
        console.log(e)
      }
      
      
    })
    .catch(err => {
      console.log(err);
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
    axios
      .post("http://192.168.43.48:5000/api/users/register",
        {
        username,
        password
        })
      .then( async res => {
        setUser(res.data.payload);
        setToken(res.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(res.data.payload))
        await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
      })
      .catch(err => {
        console.log(err);
      })
  }

  const value = {
    user,
    register,
    signOut,
    login
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
}
