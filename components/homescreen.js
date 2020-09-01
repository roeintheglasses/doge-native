import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 80,
        alignItems: 'center',
    },
    text: {
        color: 'white',
    }
});

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Memes</Text>
        </View>
    );
}
