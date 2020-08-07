import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import TextInput from './components/textInput'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
