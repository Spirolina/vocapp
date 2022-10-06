import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Definition = ({definition}) => {
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
    </View>
  )
}

const styles = StyleSheet.create({
    definitionTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'gray'
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
        elevation: 8
    }, 
})


export default Definition
