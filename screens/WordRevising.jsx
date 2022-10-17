import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

const WordRevising = ({ route, navigation }) => {
    const [currentId, setCurrentId] = useState(route.params.currentId);
    const [words, setWords] = useState(route.params.words)
    const [word, setWord] = useState(words[currentId])

    useEffect(() => {
        setWord(words[currentId])
    }, [currentId])
    
  return (
      <View>
          <Text> {word.word} </Text>
          <Button
              title='next'
              onPress={() => setCurrentId(currentId + 1)}
          />
   </View>
  )
}

export default WordRevising
