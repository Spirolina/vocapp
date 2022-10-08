import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Example } from './Example'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Examples = ({ examples, setExamples }) => {
    
    const handleAdd = () => {
        const lastId =examples.length > 0 ? examples[examples.length - 1].id : 0 
        console.log(lastId)
        setExamples([...examples, {text:'new example', edit: true, id: lastId +1}])
    }

    const handleExample = (example, currentExample, edit) => {
        const newExample = { ...example, text: currentExample, edit, };
        let newExamples = [...examples]
        for (let i = 0; i < examples.length; i++) {
            if (newExamples[i].id === newExample.id) {
                newExamples[i] = newExample;
                break;
            }
        }
            
        setExamples(newExamples);
    }

    const handleDelete = (id) => {
        let newExamples = [...examples]
        let deleteIndex = -1;
        for (let i = 0; i < examples.length; i++) {
            if (newExamples[i].id === id) {
                deleteIndex = i;
                break;
            }
        }

        newExamples.splice(deleteIndex, 1);
        setExamples(newExamples);
    }

  return (
    <View
                    style={styles.exampleBox}
                >
                    <Text style={styles.examplesTitle}> examples </Text>
          {examples.length > 0
              ?
              examples.map(example => <Example
                  example={example}
                  key={example.id}
                  handleExample={handleExample}
                  handleDelete={handleDelete}
              />)
              :
              <Text> There is no example </Text>}
          
          <TouchableOpacity
              style={styles.add}
              onPress={handleAdd}
          >
          <Ionicons name='add-circle-outline' size={35} color='#e65c4f' />
          </TouchableOpacity>
                </View>
  )
}

const styles = StyleSheet.create({
    examplesTitle: {
        textAlign: 'center',
        marginBottom: 8,
        fontWeight: 'bold',
        color: 'gray',
    
    },
    exampleBox: {
        backgroundColor: '#fff',
        padding: 12,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 12,
        marginTop: 8,
        elevation: 8,
        alignItems: 'center'
    },
    add: {
        marginTop: 12
    }
})
