import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SearchItem = ({ word, partOfSpeech, definition, example, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('WordEdit', {
        word,
        partOfSpeech,
        definition,
        example
      })}
    >
      <View style={styles.title}>
        <Text style={styles.word}> {word} </Text>
        <Text style={styles.partOfSpeech}>({partOfSpeech})</Text>
      </View>
      
      <Text style={styles.definition}> {definition} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#6f8197',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  title: {
    alignItems:'center',
    flexDirection: 'row',
  },
  word: {
    fontSize: 18,
    color: '#fff'
  },
  partOfSpeech: {
    color:  '#f5f5f5',
    marginLeft: 8,
  },
  definition: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default SearchItem
