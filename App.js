import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './components/mainPage'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainPage />
      </NavigationContainer>
    </PaperProvider>
  );
}

