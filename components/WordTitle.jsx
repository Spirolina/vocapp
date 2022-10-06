import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const WordTitle = ({ word, partOfSpeech }) => {
  return (
      <View style={styles.container}>
          <Text style={styles.wordStyle}>{word}</Text>
          <Text style={styles.pOS}>({partOfSpeech})</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center'
    },
    wordStyle: {
        fontSize: 24,
        color: '#fff'
    },
    pOS: {
        fontSize: 16,
        color:  '#f5f5f5',
        marginLeft: 8,
    }
})

export default WordTitle
