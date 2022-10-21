import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomBar from '../components/BottomBar';
import WordReviseExample from '../components/WordReviseExample';
import useDeleteWord from '../hooks/useDeleteWord';


const WordRevising = ({ route, navigation }) => {
    const [currentId, setCurrentId] = useState(route.params.currentId);
    const [words, setWords] = useState(route.params.words)
    const [word, setWord] = useState(words[currentId])
    const [examples, setExamples] = useState(word.examples)
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    const { deleteWord, loading, error, setError} = useDeleteWord();
    

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.filter}
                onPress={() => deleteWord(word._id, navigation)} 
                >
                    {loading ? <ActivityIndicator color='#fff' size={30} /> : <Icon name='delete' color='#fff' size={30} />}
                </TouchableOpacity>
          ),
        });
    }, [navigation, word, loading]);



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
        setExamples(word.examples)
        setWord(words[currentId])
    }, [currentId])
    
    useEffect(() => {
        let timeout;
        if (error) {
            timeout = setTimeout(() => {
                setError('');
            },3000)
        }
        return () => timeout
        
    },[error])

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
                    {examples
                        ?
                        <View
                        style={styles.lighter}
                        >
                        <ScrollView
                        style={styles.examples}
                        >
                        {examples.map(example => <WordReviseExample example={example} />)}
                            </ScrollView>
                            </View>
                    : <Text>
                        No example
                        </Text>}
                    
                        {error
                ? <View
            style={styles.error}
                >
                            <Text
                            style={styles.errorText}
                            > {error} </Text>
                </View>
                : null}
                </View>
                
               
            </ImageBackground>
            

            <BottomBar current={currentId} total={words.length} />


          
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
        flex: 1,
        
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
    examples: {
        marginTop: 64,
        width: '100%',
    },
    lighter: {
        width: '70%',
        maxHeight: '60%',
    },
    error: {
        backgroundColor: '#d9534f',
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 32,
        padding: 8,
        elevation: 16,
        borderRadius: 16,

    },

    errorText: {
        fontSize: 16,
        fontWeight: 'bold',
    }

    
})

export default WordRevising
