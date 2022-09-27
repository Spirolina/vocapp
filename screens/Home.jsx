import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Home = () => {
  return (
      <View style={styles.container}>
          <Text> Home screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaeff3'
    }
})