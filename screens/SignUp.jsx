import React , {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { AuthContext } from '../contexts/AuthProvider';

export const SignUp = ({navigation}) => {

  const [show, setShow] = useState(true)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext)

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setShow(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setShow(true) })

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleSignUp = () => {
    auth.register(username, password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.welcomeText}>
          Welcome stranger
        </Text>
        <View style={styles.inputBox}>
       
          <TextInput style={styles.input} textContentType="username" onChangeText={text => setUsername(text)}
            defaultValue={username}
            placeholder='Username' />
        </View>
        
        <View style={styles.inputBox}>
     
          <TextInput style={styles.input}
            placeholder='Password'
            onChangeText={text => setPassword(text)}
            defaultValue={password}
            secureTextEntry={true} />
        </View>

        <View style={styles.inputBox}>
          
          <TextInput style={styles.input}
            placeholder='Password again'
            secureTextEntry={true} />
        </View>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}> Sign up </Text>
        </TouchableOpacity>
       
      </View>
      {show ? <View
        style={styles.footerText}>

      
        <Text style={styles.myText}>
          If you already have an account
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>
      </View> : null}
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#eaeff3'
  },
  inputContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: '#e65c4f',
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    alignItems: 'center'
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
    padding: 12,
    marginTop: 16,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#D2544A'
  },
  inputBox: {
    width: "100%",
    marginBottom: 16
  },
  label: {
    fontSize: 16
  },
  signUpButton: {
    backgroundColor: "#fff",
    width: "100%",

    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 64,
    
  },
  signUpButtonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  }, 
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#e65c4f",

  },
  myText: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "transparent",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent:'center',
    padding:0,
  },
  welcomeText: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 20
  },
  footerText: {

    marginTop: 'auto',
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 32,
  }

})