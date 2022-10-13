import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './screens/Home';
import { SettingsScreen } from './screens/SettingsScreen';
import { MyWords } from './screens/MyWords';

export const HomeTabs = () => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true
   }}  
      screenOptions={({ route }) => ({
              
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'My Words') {
                iconName = focused ? 'library' : 'library-outline';

              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
              },
            tabBarActiveTintColor: '#e65c4f',
              tabBarInactiveTintColor: '#e65c4f',
          
            })}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              
              options={{
                headerShown: false,
              }}

      />
      <Tab.Screen
              name="My Words"
              component={MyWords}
              
        options={{
                
          headerShown: true,
          headerStyle: {
            backgroundColor: '#e65c4f',
          },
          headerTintColor: '#fff'
              }}

            />

<Tab.Screen
              name="Settings"
              component={SettingsScreen}
              
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#e65c4f',
                }
                
              }}

            />
          </Tab.Navigator>
  )
}
