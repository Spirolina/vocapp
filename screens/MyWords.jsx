import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const MyWords = () => {
  return (
      <View
      style={styles.container}
      >
          <Text> 
              My words
          </Text>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
