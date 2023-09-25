import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return <>
    <SafeAreaView style={estilos.tela}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  </>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})