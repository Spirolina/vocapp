import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

const Definition = ({ definition, setDefinition }) => {
    const [edit, setEdit] = useState(false);


    if (edit)
        return (
            <View
                style={styles.definitionInput}

            >
                <Text style={styles.definitionTitle}> definition </Text>
                <TextInput
                    multiline
                    value={definition}
                    style={styles.definition}
                    autoFocus
                    onChangeText={(text) => setDefinition(text) }
                >
                
                </TextInput>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => setEdit(false)}
                >
                    <Icon name='checkcircleo' size={30} color='#e65c4f'  />
                </TouchableOpacity>
            </View>

        );
  
    return (
    <View
    style={styles.definitionBox}
    >
        <Text style={styles.definitionTitle}> definition </Text>
    <Text
        style={styles.definition}
    >
        {definition}
          </Text>
          
          <TouchableOpacity
                style={styles.editButton}
                onPress={() => setEdit(true)}
          >
                              <Feather name='edit' size={30} color='#e65c4f'  />

          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    definitionTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 6
    },
    definition: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    definitionBox: {
        backgroundColor: '#fff',
        padding: 12,
        paddingTop: 4,
        borderRadius: 12,
        elevation: 8,
    }, 
    definitionInput: {
        backgroundColor: '#fff',
        padding: 12,
        paddingTop: 4,
        borderRadius: 12,
        elevation: 20,
        borderColor: '#6200EE',
        borderWidth: 2
    },
    editButton: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    saveButton: {
        marginLeft: 'auto',
        
    }
})


export default Definition
