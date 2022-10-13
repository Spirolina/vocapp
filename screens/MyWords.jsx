import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Button, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import { AuthContext } from '../contexts/AuthProvider'
import Icon from 'react-native-vector-icons/Feather';
import Word from '../components/Word';

export const MyWords = ({navigation}) => {
    const auth = useContext(AuthContext);
    const [count, setCount] = useState(0)
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.filter}
                onPress={() => setCount((c) => c + 1)} 
                >
                    <Icon name='filter' color='#fff' size={30} />
                </TouchableOpacity>
          ),
        });
    }, [navigation]);
    console.log(auth.words)

    return (
        <SafeAreaView
            style={styles.container}
        >
            {auth.wordsLoading
                ? <ActivityIndicator />
                : auth.wordsError
                    ? <Text>
                My words
                    </Text>
                    : auth.words
                        ? <FlatList
                            data={auth.words}
                            style={styles.flat}
                            numColumns={2}
                            keyExtractor={item => item ._id}
                            renderItem={({ item }) =>   <Word word={item.word} image={item.imageUri} />
                            }
                        />

                        
                        : <Text> There is no word </Text>}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    filter: {
        marginRight: 16
    },
    flat: {
        width: '100%',
        flex: 1,
        padding: 8
    }
})
