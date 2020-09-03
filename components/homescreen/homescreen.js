import axios from 'axios';
import React from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
    },
    headerText: {
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        color: 'white',
        fontWeight: "bold"
    },
    firstView: {
        width: deviceWidth,
        backgroundColor: '#F44336',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    secondView: {
        width: deviceWidth,
        backgroundColor: '#9C27B0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    thirdView: {
        width: deviceWidth,
        backgroundColor: '#3F51B5',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    forthView: {
        width: deviceWidth,
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

});

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        }
    }
    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({ imageURL: response.data.message });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.firstView}>
                        <Text style={styles.headerText}>First View</Text>
                    </View>

                    <View style={styles.secondView}>
                        <Text style={styles.headerText}>Second View</Text>
                    </View>

                    <View style={styles.thirdView}>
                        <Text style={styles.headerText}>Third View</Text>
                    </View>

                    <View style={styles.forthView}>
                        <Text style={styles.headerText}>Forth View</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
