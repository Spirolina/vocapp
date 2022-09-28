import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useContext } from 'react'
import { Text, StatusBar, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from './contexts/AuthProvider'
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { SignUp } from './screens/SignUp';

export const NavApp = () => {
    const auth = useContext(AuthContext)
  const Stack = createNativeStackNavigator();
  const exit = <Icon name="logout" size={30} color="#fff" />;


  return (
    <NavigationContainer>
      <Stack.Navigator>

      
        {
          auth.user ? <>
            <Stack.Screen
              name="Home"
              component={Home}
              
              options={{
                title: 'Home',
                headerTintColor:'#fff',
                headerTitleStyle: {
                  color:'#fff'
                },  
                headerStyle: {
                  backgroundColor: '#e65c4f',
                },
                headerRight: () => (
                  <TouchableOpacity
                  onPress={auth.signOut}
                  >
                    {exit}
                  </TouchableOpacity>
                   
                ),
              }}

            />

          </> :
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Login',
                  headerTintColor:'#fff',
                  headerBackTitleStyle: {
                    color: '#fff'
                  },
                  headerTitleStyle: {
                    color: '#fff'
                  },
                  headerStyle: {
                    backgroundColor: '#e65c4f',
                  },
                  headerShadowVisible: false

                }}
              />
              <Stack.Screen
                name="Sign Up"
                component={SignUp}
                options={{
                  title: 'Sign Up',
                  headerTintColor:'#fff',
                  headerTitleStyle: {
                    color: '#fff'
                  },
                  headerStyle: {
                    backgroundColor: '#e65c4f',
                  },
                  headerShadowVisible: false
                }}
              />
          </>
          

      }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

