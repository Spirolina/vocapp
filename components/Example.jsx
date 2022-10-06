import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

export const Example = ({ example, setExamples, handleExample }) => {
    const [currentExample, setCurrentExample] = useState(example.text)
   
    const handleSave = () => {
        handleExample(example, currentExample);
    }

    if (example.edit)
        return (
            <View
                style={styles.exampleInput}
            >
                <TextInput
                    multiline
                    autoFocus
                    value={currentExample}
                    style={styles.input}
                    onChangeText={(text) => setCurrentExample(text)}
                >

                </TextInput>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSave}
                >
                    <Icon name='checkcircleo' size={30} color='#fff' />
                </TouchableOpacity>
            </View>

        );

    return (
        <View
            style={styles.example}
        >
            <Text
                style={styles.exampleText}
            >
                {example.text}
              
            </Text>
            <TouchableOpacity
                style={styles.editButton}
            >
                <Feather name='edit' size={25} color='#fff' />
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    example: {
        backgroundColor: '#e65c4f',
        padding: 8,
        borderRadius: 8,
        elevation: 5,
        width: '100%',
        flexDirection: 'row',
        marginTop: 4,
    },
    exampleText: {
        fontSize: 16,
        color: '#fff'
    },
    exampleInput: {
        backgroundColor: '#e65c4f',
        padding: 8,
        borderRadius: 8,
        elevation: 5,
        width: '100%',
        marginTop: 4,
    },
    input: {
        width: '100%'
    },
    editButton: {
        position: 'absolute',
        top: 5,
        right: 5
    }, 
    saveButton: {
        marginLeft: 'auto'
    }
})
