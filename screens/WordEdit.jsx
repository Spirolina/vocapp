import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Definition from '../components/Definition'
import { Examples } from '../components/Examples'
import { WordImage } from '../components/WordImage'
import WordTitle from '../components/WordTitle'

const WordEdit = ({ route, navigation }) => {
    const { word, partOfSpeech, definition, example } = route.params
    const [examples, setExamples] = useState(example ? [{text:example, edit: false, id:0}] : [])
    const [myWord, setMyWord] = useState(word);
    const [myPos, setMyPos] = useState(partOfSpeech);
    const [myDef, setMyDef] = useState(definition);
    const [imageBase64, setImageBase64] = useState(null);

    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='handled'
                style={styles.word}
            >
                
                <WordTitle
                    word={myWord}
                    partOfSpeech={myPos}
                />

                <Definition
                    definition={myDef}
                    setDefinition={setMyDef}
                />
                
                <Examples
                    examples={examples}
                    setExamples={setExamples}
                />

                <WordImage
                    imageBase64={imageBase64}
                    setImageBase64={setImageBase64}
                />

                

            </ScrollView>
            <TouchableOpacity
                style={styles.addButton}
                >
                    <Text
                    style={styles.addButtonText}
                    > Add
                    </Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        
    },
  
    word: {
        backgroundColor: '#e65c4f',
        padding: 16,
        paddingBottom: 32,
    
    },

    addButton: {
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: 'center',
        paddingVertical: 10,
        height: 60,

    },

    addButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    }
})

export default WordEdit
