import React , {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'
import { AuthContext } from '../contexts/AuthProvider';

export const Login = ({navigation}) => {
  const [show, setShow] = useState(true)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
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

  useEffect(() => {
    if (auth.authUsernameError) {
      setUsernameError(auth.authUsernameError)
    }

    if (auth.authPasswordError) {
      setPasswordError(auth.authPasswordError)
    }
  }, [auth.authUsernameError, auth.authPasswordError])

  const handleLogin = () => {
    let error = false;
    if (!username) {
      setUsernameError('Username must be exist!')
      setUsername('')
      error = true;
    }
    
    if (!password) {
      setPasswordError('Password must be exist!');
      setPassword('')
      error = true;
    }
  
    if(!error && !auth.loginLoading) auth.login(username, password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.welcomeText}>
          Welcome user
        </Text>
        <View style={styles.inputBox}>
       
          <TextInput style={usernameError ? styles.errorInput : styles.input}
            textContentType="username"
            onChangeText={text => {
              setUsernameError('')
              setUsername(text)
            }}
            value={!usernameError ? username : ''}
            placeholder={usernameError || 'Username'} />
        </View>
        
        <View style={styles.inputBox}>
     
          <TextInput style={passwordError ? styles.errorInput : styles.input}
            placeholder={passwordError || 'Password'}
            onChangeText={text => {
              setPasswordError('')
              setPassword(text)
            }}
            value={!passwordError ? password : ''}
            secureTextEntry={true} />
        </View>

        
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.signUpButton}>
          { auth.loginLoading ? <ActivityIndicator  size='large' color='#000' /> : <Text style={styles.signUpButtonText}> Login </Text>}
        </TouchableOpacity>
       
      </View>
      {show ? <View
        style={styles.footerText}>

      
        <Text style={styles.myText}>
          If you don't have an account
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign Up')}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}> Sign Up </Text>
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
  errorInput: {
    width: "100%",
    backgroundColor: "transparent",
    padding: 12,
    marginTop: 16,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#292b2c'
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
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 64,
    height: 60,
    
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