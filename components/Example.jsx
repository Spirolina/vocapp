import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Example = ({example, setExamples}) => {
  return (
      <View
      style={styles.example}
      >
          <Text
          style={styles.exampleText}
          >
              {example}
          </Text>  
    </View>
    )
}

const styles = StyleSheet.create({
    example: {
        backgroundColor: '#e65c4f',
        padding: 8,
        borderRadius: 8,
        elevation: 5,
        width: '100%'
    },
    exampleText: {
        fontSize: 16,
        color: '#fff'
    }
})
