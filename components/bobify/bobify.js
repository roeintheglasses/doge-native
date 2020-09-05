import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BobifyTextInput from './bobifyTextInput'
import { Appbar } from 'react-native-paper';


var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bob: {
        backgroundColor: '#000000',
        flex: 1,
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

export default function bobify(props) {
    return (
        <View style={styles.bob}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon="forwardburger" onPress={props.navigation.openDrawer} />
                <Appbar.Content title="Bobify" subtitle="TyPe lIkE tHiS?!" />
            </Appbar.Header>
            <View style={styles.container}>
                <BobifyTextInput></BobifyTextInput>
            </View>
        </View>
    );
}

