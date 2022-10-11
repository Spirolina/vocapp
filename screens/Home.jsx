import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Search } from '../components/Search'
import WordStats from '../components/WordStats'

export const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
      <Search navigation={navigation} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
        width: '100%',
        alignItems: 'center',
         flex:1,
    }
})