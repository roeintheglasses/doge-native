import React, { useState, useRef } from 'react';
import { View, StyleSheet, Clipboard, Keyboard, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import dogeify from 'dogeify-js';
import { TextInput, Text, Button } from 'react-native-paper';

const dogeTranslator = () => {
    const [value, setDoge] = useState('');
    const [normalTxt, setNormal] = useState('');
    const txtInput = useRef(null);
    const onClearButtonClick = () => {
        txtInput.current.clear();
        setNormal('');
        setDoge('')
    };
    const onCopyButtonClick = () => {
        Clipboard.setString(value)
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        input: {
            height: 50,
            width: 300,
            backgroundColor: "white",
            fontSize: 14,
            padding: 0,
            margin: 0,
            borderWidth: 0,
        },
        dogeText: {
            alignItems: "center",
            padding: 10,
            flex: 1,
        },
        image: {
            alignItems: "center",
            paddingTop: 30,
            width: 150,
            height: 150,
        },
        inputFieldButtonContainer: {
            flex: .2,
            flexDirection: "row",
            alignItems: 'center',
        },
        inputFieldButton: {
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
        }
    })

    return (

        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/icon.png')}
            />
            <Text style={{ paddingTop: 10, paddingBottom: 10, fontWeight: "bold", color: "white" }}>wow</Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ flex: .2 }}>
                    <TextInput
                        mode='outlined'
                        ref={txtInput}
                        style={styles.input}
                        placeholder="Type here to translate to doge!"
                        placeholderTextColor="Black"
                        onChangeText={(text) => {
                            setDoge(dogeify(text));
                            setNormal(text);
                        }}
                        value={normalTxt}
                    />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.inputFieldButtonContainer}>
                <Button style={styles.inputFieldButton} icon="pen" mode="contained" onPress={onCopyButtonClick}>Copy</Button>
                <Button style={styles.inputFieldButton} icon="delete" mode="contained" onPress={onClearButtonClick}>Clear</Button>
            </View>
            <TouchableOpacity
                style={styles.dogeText}
                onPress={() => Clipboard.setString(value)}
            >
                <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold", color: "white" }}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    );
}



export default dogeTranslator;
