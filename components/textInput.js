import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import dogeify from 'dogeify-js';

const dogeTranslator = () => {
    const [value, setText] = useState('');
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            height: 40,
            width: 300,
            paddingLeft: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "white",
            color: "white",

        }
    })
    return (
        <View style={styles.container}>
            <Text style={{ padding: 20, fontWeight: "bold", color: "white" }}> Dogeify Your Life</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here to translate to doge!"
                onChangeText={text => setText(dogeify(text))}
            />
            <Text style={{ padding: 20, fontSize: 24, fontWeight: "bold", color: "white" }}>
                {value}
            </Text>
        </View>
    );

}



export default dogeTranslator;
