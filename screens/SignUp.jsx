import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

        <View style={styles.inputBox}>
          <Text style={styles.label} >
            Username:
          </Text>
          <TextInput style={styles.input} textContentType="username" />
        </View>
        
        <View style={styles.inputBox}>
          <Text style={styles.label}>
            Password:
          </Text>
          <TextInput style={styles.input}
            secureTextEntry={true} />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>
            Password Again:
          </Text>
          <TextInput style={styles.input}
            secureTextEntry={true} />
        </View>

       
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}> Sign up </Text>
      </TouchableOpacity>
      <Text style={styles.myText}>
        If you already have an account
      </Text>
      <TouchableOpacity
      style={styles.loginButton}
      >
        <Text> Login </Text>
      </TouchableOpacity>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eaeff3'
  },
  inputContainer: {
    width: "90%",
    padding: 16,
    backgroundColor: '#e65c4f',
    borderRadius: 16,
    elevation: 25,
  },
  input: {
    backgroundColor: "#eaeff3",
    padding: 8,
    marginTop: 4,
    borderRadius: 8,
    fontSize: 16

  },
  inputBox: {
    marginBottom: 16
  },
  label: {
    fontSize: 16
  },
  signUpButton: {
    backgroundColor: "#5cb85c",
    marginTop: 16,
    width: "90%",
    padding: 10,
    borderRadius: 8
  },
  signUpButtonText: {
    textAlign: 'center',
    fontSize: 16
  }, 
  myText: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#f0ad4e",
    paddingVertical: 4,
    paddingHorizontal: 8
  }

})