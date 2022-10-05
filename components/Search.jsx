import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDictionary } from '../hooks/useDictionary';
import SearchItem from './SearchItem';



export const Search = () => {
    const [word, setWord] = useState('');
    const search = <Ionicons name="search" size={30} color="#e65c4f" />;
    const { getDictionary, loading, words } = useDictionary();
    const searhItems = words.map(myWord => <SearchItem
        word={word}
        partOfSpeech={myWord.partOfSpeech}
        definition={myWord.definitions[0].definition}
    />)

    useEffect(() => {
        getDictionary(word);
    },[word])

    return (
        <View style={styles.container}>
           
            <ScrollView
                keyboardShouldPersistTaps='handled'
                stickyHeaderIndices={[0]}
                style={styles.searchItems}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.searchBox}>

                    <View style={styles.barContainer}>
                    <TextInput
                        onChangeText={(text) => setWord(text)}
                        value={word}
                        placeholder='Word..'
                        style={styles.searchBar}
                    />
                    <TouchableOpacity
                        style={styles.searchButton}
                    >
                        {search}
                    </TouchableOpacity>
                </View>
                    
                </View>
                
                {word.length > 0 ? searhItems : null}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    searchBar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: '#f5f5f5',
    },
    searchBox: {
        
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e65c4f',
        padding: 32,
        justifyContent: 'center',
        elevation: 20,
        height: 120,
        

    },
    searchButton: {
        padding: 8,
        height: 50,
        width: 50,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        backgroundColor: '#f5f5f5',

    },
    searchItems: {
        width: '100%',

        
    }
})