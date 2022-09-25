import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './contexts/AuthProvider';
import { NavApp } from './NavApp';

export default function App() {
  return (
    <AuthProvider>
      <NavApp />     
    </AuthProvider>

  );
}

