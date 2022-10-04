import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Search } from '../components/Search'

export const Home = () => {
  return (
      <View style={styles.container}>
        <Search />
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