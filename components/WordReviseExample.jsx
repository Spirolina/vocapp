import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WordReviseExample = ({ example }) => {
    return (
        <View
        style={styles.container}
        >
            <Text
            style={styles.text}
            >
                {example}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'rgba(256, 256, 256, 0.5)',
        flex: 1,
        padding: 16, 
        marginBottom: 8,
    
    },
    text: {
        fontSize: 16
    }
})

export default WordReviseExample
