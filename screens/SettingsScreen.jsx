import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../contexts/AuthProvider';

export const SettingsScreen = () => {
  const auth = useContext(AuthContext);
  const exit = <Icon name="logout" size={30} color="#e65c4f" />;

  return (
    <View style={styles.container}>
      <View style={styles.signOut}>
      <TouchableOpacity
        style= {styles.signOutButton}
        onPress={() => auth.signOut()}
      >
        
          {exit}
          <Text> Sign out</Text>

        </TouchableOpacity>
      </View>
    
      <Text> Settings</Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eaeff3'
  },
  signOutButton: {
    alignItems: 'center',

  },
  signOut: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: 48,
    marginRight: 16
  }
})