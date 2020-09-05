import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import DogifyTextInput from './dogifyTextInput'


var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    doge: {
        flex: 1,
        backgroundColor: '#000000',
    },
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
    }, appbar: {
        width: deviceWidth,
        paddingTop: 20,
        paddingBottom: 10,
        marginBottom: 30,
    },
});

export default function dogify(props) {
    return (
        <View style={styles.doge}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon="forwardburger" onPress={props.navigation.openDrawer} />
                <Appbar.Content title="Dogify" subtitle="Such Doge, Much wow" />
            </Appbar.Header>
            <View style={styles.container}>
                <DogifyTextInput></DogifyTextInput>
            </View>
        </View>
    );
}

