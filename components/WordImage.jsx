import React, {useState} from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';

export const WordImage = ({imageBase64, setImageBase64}) => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
       

        if (!result.cancelled) {
            setImage(result.uri);
            setImageBase64(result.base64)
        }
    };

    return (
      
        <View
            style={styles.container}
        >  
            <ImageBackground
                source={ image ? {uri: image} : require('../assets/default-word-image.png') }
                style={styles.image}
            >
                
                    

            
                <TouchableOpacity
                    onPress={pickImage}
            style={styles.editButton}
            >
                <Feather name='edit' size={30} color='#fff' style={{elevation: 12}} />
                    </TouchableOpacity>
                </ImageBackground >
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        marginTop: 8,
        borderRadius: 8,
        overflow: "hidden",
        

    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
 
    editButton: {
        backgroundColor: 'rgba(230, 92, 79, 0.5)',
        borderRadius: 50,
        padding: 12,
    }
})
