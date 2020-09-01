import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';

export default function footer() {
    return (
        <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ieeFxPV6r32QVQPU9')}>
                <Text style={{ marginTop: 20, color: "white" }}>
                    Have Suggestions? Gimme!!
                    </Text>
            </TouchableOpacity>
        </View>
    );
}