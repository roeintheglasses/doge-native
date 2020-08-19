import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Linking } from 'react-native';
import TextInput from './textInput'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        paddingTop: 80,
        alignItems: 'center',
    },
});

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#1f1f1f"
                barStyle="light-content"
            />
            <View style={{ flex: .9 }}>
                <TextInput></TextInput>
            </View>
            <View style={{ flex: .1 }}>
                <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ieeFxPV6r32QVQPU9')}>
                    <Text style={{ marginTop: 20, color: "white" }}>
                        Have Suggestions? Gimme!!
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

