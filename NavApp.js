import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react'
import {StyleSheet} from 'react-native'

import { AuthContext } from './contexts/AuthProvider'
import { Login } from './screens/Login';
import { SignUp } from './screens/SignUp';
import { HomeTabs } from './HomeTabs';
import WordEdit from './screens/WordEdit';

export const NavApp = () => {
    const auth = useContext(AuthContext)
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
    >
      <Stack.Navigator>
      
      {
          auth.user ? <>
            
            <Stack.Screen
              name='Home'
              component={HomeTabs}
              options={{
                headerShown: false,
              }}
            />

        <Stack.Screen
              name='WordEdit'
              component={WordEdit}
              options={{
                title: 'Word Edit',
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color: '#fff'
                },
                headerStyle: {
                  backgroundColor: '#e65c4f',
                },
                headerShadowVisible: false

              }}
            />
        </> :
          <>
            

              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Login',
                  headerTintColor: '#fff',
                  headerBackTitleStyle: {
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
                  headerTintColor: '#fff',
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
  

