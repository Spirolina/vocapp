import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Definition from '../components/Definition'
import { Examples } from '../components/Examples'
import WordTitle from '../components/WordTitle'

const WordEdit = ({ route, navigation }) => {
    const { word, partOfSpeech, definition, example } = route.params
    const [examples, setExamples] = useState(example ? [example] : [])
    const [myWord, setMyWord] = useState(word);
    const [myPos, setMyPos] = useState(partOfSpeech);
    const [myDef, setMyDef] = useState(definition);

    return (
        <View style={styles.container}>
            <View style={styles.word}>
                
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

                <TouchableOpacity
                style={styles.addButton}
                >
                    <Text
                    style={styles.addButtonText}
                    > Add
                    </Text>
                </TouchableOpacity>

            </View>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
  
    word: {
        backgroundColor: '#e65c4f',
        padding: 16,
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
    },

    addButton: {
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: 'center',
        marginTop: 16,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 32,
        height: 60,
    },

    addButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24
    }
})

export default WordEdit
