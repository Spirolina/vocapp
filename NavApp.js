import React, { useContext } from 'react'
import { Text, StatusBar, View, StyleSheet } from 'react-native'
import { AuthContext } from './contexts/AuthProvider'

export const NavApp = () => {
    const auth = useContext(AuthContext)

  return (
<View style={styles.container}>
        <Text>{auth.info}</Text>
        <StatusBar style="auto" />
      </View>  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

