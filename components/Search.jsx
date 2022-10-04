import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDictionary } from '../hooks/useDictionary';
import SearchItem from './SearchItem';



export const Search = () => {
    const [word, setWord] = useState('');
    const search = <Ionicons name="search" size={30} color="#e65c4f" />;
    const { getDictionary, loading, words } = useDictionary();
    const searchItems = words.map(word => <SearchItem word={word} />)

    useEffect(() => {
        getDictionary(word);
    },[word])

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>

            
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    searchBar: {
        height: 50,
        width: "90%",
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: '#f5f5f5'
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e65c4f',
        padding: 32,
        justifyContent: 'center',
        width: '100%',
        elevation: 20,
        

    },
    searchButton: {
       
        padding: 8,
        height: 50,
        width: 50,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        backgroundColor: '#f5f5f5',

    }
})