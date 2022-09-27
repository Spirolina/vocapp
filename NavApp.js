import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useContext } from 'react'
import { Text, StatusBar, View, StyleSheet } from 'react-native'
import { AuthContext } from './contexts/AuthProvider'
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { SignUp } from './screens/SignUp';

export const NavApp = () => {
    const auth = useContext(AuthContext)
  const Stack = createNativeStackNavigator();


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
                headerStyle: {
                  backgroundColor: '#e65c4f',
                },
              }}

            />

          </> :
            <>
              <Stack.Screen
                name="Sign Up"
                component={SignUp}
                options={{
                  title: 'Sign Up',
                  headerStyle: {
                    backgroundColor: '#e65c4f',
                  },
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Login',
                  headerStyle: {
                    backgroundColor: '#e65c4f',
                  },
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
  

