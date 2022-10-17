import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const Word = ({ word, image, partOfSpeech, handlePress, learned, _id }) => {
    
    return (
        <TouchableOpacity
            onPress={() => handlePress(_id)}
            style={styles.container}
        >

            <ImageBackground
                source={{ uri: image }}
                imageStyle={{ borderRadius: 16 }}

                style={styles.image}
                resizeMode="cover"
            >
                <View
                    style={styles.info}
                >
                    <Text
                    style={styles.word}>
                        {word} 
                    </Text>
                    <Text
                    style={styles.word}
                    >
                    ({partOfSpeech})
                    </Text>
                </View>
          
            </ImageBackground>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    image: {
        height: 120,
        justifyContent: 'center',
        width: '100%'
    }, 
    container: {
        width: '45%',
        borderRadius: 32,
        margin: 4,
        flexGrow: 1,
    },
    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(39, 39, 39, 0.6)',
        borderRadius: 16,
    }, 
    word: {
        color: '#fff', 
        fontSize: 18
    }
})

export default Word
