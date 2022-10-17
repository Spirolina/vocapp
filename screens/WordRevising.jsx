import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const WordRevising = ({ route, navigation }) => {
    const [currentId, setCurrentId] = useState(route.params.currentId);
    const [words, setWords] = useState(route.params.words)
    const [word, setWord] = useState(words[currentId])
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);

    useEffect(() => {
        if (currentId === words.length - 1) {
            setNext(true);
        } else {
            setNext(false);
        }

        if (currentId === 0) {
            setPrev(true)
        } else {
            setPrev(false);
        }

        setWord(words[currentId])
    }, [currentId])
    
    return (
        <View
            style={styles.container}
        >
            <ImageBackground
                style={styles.image}
                source={{ uri: word.imageUri }}
                resizeMode='cover'
            >
                <View
                    style={styles.darker}
                >

                    <View
                        style={styles.wordContent}
                    >
                        <Text
                            style={styles.text}
                        > {word.word} </Text>

                        <Text
                        style={styles.definition}
                        >
                            {word.definition}
                        </Text>
                    </View>
                    
              
                    <TouchableOpacity
                        style={prev ? styles.prevDisabled : styles.prev}

                        disabled={prev}
                        onPress={() => setCurrentId(currentId - 1)}
                    >
                        <Icon name='keyboard-arrow-left' size={30} />
                    </TouchableOpacity>
              
                    <TouchableOpacity
                        style={next ? styles.nextDisabled : styles.next}
                        disabled={next}
                        
                        onPress={() => setCurrentId(currentId + 1)}
                    >
                        <Icon name='keyboard-arrow-right' size={30} />
                    </TouchableOpacity>
                </View>
               
            </ImageBackground>

            <View
                style={styles.bottomBar}
            >
                <Text>
                    Bottom-bar
                </Text>
                
            </View>


          
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 11,
        
    }, 
    text: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 8,
    },

    definition: {
        color: '#fff',
        fontSize: 16
    },
    bottomBar: {
        flex:1,
    },
    darker: {
        backgroundColor: 'rgba(39, 39, 39, 0.6)',
        height: '100%',
        alignItems: 'center',
    },
    next: {
        position: 'absolute',
        top: '50%',
        right: 4,
        backgroundColor: '#e65c4f',
        borderRadius: 8,
        
    }, 
    nextDisabled: {
        position: 'absolute',
        top: '50%',
        right: 4,
        backgroundColor: 'gray',
        borderRadius: 8,

    },
    prev: {
        position: 'absolute',
        top: '50%',
        left: 4,
        backgroundColor: '#e65c4f',
        borderRadius: 8,
    },

    prevDisabled: {
        position: 'absolute',
        top: '50%',
        left: 4,
        backgroundColor: 'gray',
        borderRadius: 8,
    },

    wordContent: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 64,
    }, 

    
})

export default WordRevising
