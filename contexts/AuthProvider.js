import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const value = {
    info: 'lorem ipsum'
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
}
