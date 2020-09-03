import React from 'react';
import { Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ieeFxPV6r32QVQPU9')}>
                <Text style={styles.txt}>
                    Have Suggestions? Gimme!!
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'white',
        borderTopWidth: 1,
    },
    txt: {
        padding: 20,
        color: 'white',
        fontFamily: 'monospace',
    },
});