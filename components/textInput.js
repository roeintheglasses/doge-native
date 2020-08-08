import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Clipboard, TouchableOpacity, Linking, Image, Button } from 'react-native';
import dogeify from 'dogeify-js';

const dogeTranslator = () => {
    const [value, setText] = useState('');
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        input: {
            height: 40,
            width: 300,
            paddingLeft: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "white",
            color: "white",
        },
        button: {
            alignItems: "center",
            padding: 10
        },
        image: {
            alignItems: "center",
            padding: 10,
            width: 150,
            height: 150,
        },
        inputRow: {
            flex: 1,
            flexDirection: "row",
        }
    })
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/icon.png')}
            />
            <Text style={{ padding: 20, fontWeight: "bold", color: "white" }}> Dogeify Your Life</Text>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate to doge!"
                    onChangeText={text => setText(dogeify(text))}
                />
                <Button
                    onPress={() => setText('')}
                    title="clear"
                    color="#841584"
                    accessibilityLabel="clear"
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => Clipboard.setString(value)}
            >
                <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold", color: "white" }}>
                    {value}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/roeintheglasses')}>
                <Text style={{ padding: 20, color: "white" }}>
                    Made with ❤ by Hrishi Jangir
            </Text>
            </TouchableOpacity>
        </View>
    );

}



export default dogeTranslator;
