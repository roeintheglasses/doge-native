import React from 'react';
import { StyleSheet, View, } from 'react-native';
import DogifyTextInput from './dogifyTextInput'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 80,
        alignItems: 'center',
    },
});

export default function dogify() {
    return (
        <View style={styles.container}>
            <DogifyTextInput></DogifyTextInput>
        </View>
    );
}

