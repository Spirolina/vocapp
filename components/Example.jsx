import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

export const Example = ({ example, setExamples, handleExample, handleDelete }) => {
    const [currentExample, setCurrentExample] = useState(example.text)
   
    const handleSave = () => {
        handleExample(example, currentExample, false);
    }

    const handleEdit = () => {
        handleExample(example, currentExample, true);
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
                style={styles.deleteButton}
                onPress={() => handleDelete(example.id)}
            >
                <Icon name='delete' size={25} color='#e65c4f' />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleEdit}
                style={styles.editButton}
            >
                <Feather name='edit' size={25} color='#e65c4f' />
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
        color: '#fff',
        marginVertical: 32,
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
        fontSize: 16,
        color: '#fff',
        width: '100%'
    },
    editButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 4,
        borderBottomLeftRadius: 8,
    }, 
    saveButton: {
        marginLeft: 'auto'
    },
    deleteButton: {
        position: 'absolute',
        bottom:0 ,
        right: 0,
        backgroundColor: '#fff',
        padding: 4,
        borderTopLeftRadius: 8,
    }
})
