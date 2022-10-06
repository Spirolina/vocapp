import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Example } from './Example'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Examples = ({examples, setExamples}) => {
  return (
    <View
                    style={styles.exampleBox}
                >
                    <Text style={styles.examplesTitle}> examples </Text>
          {examples.length > 0
              ?
              examples.map(example => <Example example={example} setExamples={setExamples} />)
              :
              <Text> There is no example </Text>}
          
          <TouchableOpacity
            style={styles.add}
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
