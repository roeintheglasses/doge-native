import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Footer from './footer';

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}
                        onPress={() => { props.navigation.navigate('Homescreen') }}
                    >
                        <View style={{ marginTop: 20, alignItems: 'center' }}>
                            <Avatar.Icon
                                icon="dog"
                                color="white"
                                size={80}
                            />
                            <View style={{ marginTop: 15, alignItems: 'center' }}>
                                <Title style={styles.title}>Meme Machine</Title>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={"white"}
                                    size={size}
                                />
                            )}
                            label="Memes"
                            labelStyle={{
                                fontFamily: 'monospace',
                                color: 'white',
                            }}
                            onPress={() => { props.navigation.navigate('Homescreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="dog"
                                    color={"white"}
                                    size={size}
                                />
                            )}
                            iconStyle={{
                                color: 'white',
                            }}
                            label="Dogeify"
                            labelStyle={{
                                fontFamily: 'monospace',
                                color: 'white',
                            }}
                            onPress={() => { props.navigation.navigate('Dogeify') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="dog"
                                    color={"white"}
                                    size={size}
                                />
                            )}
                            iconStyle={{
                                color: 'white',
                            }}
                            label="Bobify"
                            labelStyle={{
                                fontFamily: 'monospace',
                                color: 'white',
                            }}
                            onPress={() => { props.navigation.navigate('Bobify') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Footer style={styles.footer}></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        color: 'white',
        marginTop: 3,
        fontWeight: 'bold',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
        color: 'white',
    },
    footer: {
        marginBottom: 15,
        borderTopColor: '#111111',
        borderTopWidth: 1
    },
});