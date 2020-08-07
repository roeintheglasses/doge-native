import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import dogeify from './dogeify';

const dogeTranslator = () => {
    const [text, setText] = useState('');
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
            borderColor: "blue",
        }
    })
    return (
        <View style={styles.container}>
            <Text> Enter stuff here :</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here to translate!"
                onChangeText={text => setText(dogeify(text))}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text}
            </Text>
        </View>
    );

}



export default dogeTranslator;
