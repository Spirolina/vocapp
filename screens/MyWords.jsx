import React, { useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, } from 'react-native'
import { AuthContext } from '../contexts/AuthProvider'

export const MyWords = () => {
    const auth = useContext(AuthContext);
    return (
        <View
            style={styles.container}
        >
            {auth.wordsLoading
                ? <ActivityIndicator />
                : auth.wordsError
                    ? <Text>
                My words
                    </Text>
                    : auth.words
                        ? <Text> Words </Text>
                        : <Text> There is no word</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
