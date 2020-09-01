import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 80,
        alignItems: 'center',
    },
});

export default function bobify() {
    return (
        <View style={styles.container}>

            <View style={{ flex: .9 }}>
                <Text>BobiFy</Text>
            </View>
            <View style={{ flex: .1 }}>
            </View>
        </View>
    );
}

