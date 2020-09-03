import React, { useState, useRef } from 'react';
import { View, StyleSheet, Clipboard, Keyboard, TouchableOpacity, TouchableWithoutFeedback, TextInput, Dimensions } from 'react-native';
import spongibobu from 'spongibobu.js'
import { Text, Button } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const bobTranslator = () => {
    const [value, setBob] = useState('');
    const [normalTxt, setNormal] = useState('');
    const txtInput = useRef(null);
    const onClearButtonClick = () => {
        txtInput.current.clear();
        setNormal('');
        setBob('')
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
            width: windowWidth - 50,
            backgroundColor: "white",
            fontSize: 14,
            padding: 10,
            margin: 0,
            borderWidth: 0,
            borderRadius: 5,
        },
        dogeText: {
            alignItems: "center",
            padding: 10,
            flex: 1,
        },
        inputFieldButtonContainer: {
            flex: .2,
            flexDirection: "row",
            alignItems: 'center',
            paddingTop: 5,
            paddingBottom: 5,
        },
        inputFieldButton: {
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            padding: 5,
        }
    })

    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ flex: .2 }}>
                    <TextInput
                        mode='outlined'
                        ref={txtInput}
                        style={styles.input}
                        placeholder="TyPe hErE tO boBiFy"
                        placeholderTextColor="Black"
                        onChangeText={(text) => {
                            setBob(spongibobu(text));
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



export default bobTranslator;
