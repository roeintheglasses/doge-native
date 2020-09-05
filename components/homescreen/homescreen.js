import axios from 'axios';
import React from 'react'
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { Appbar, Text, Button } from 'react-native-paper';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
            loading: true
        }
        this.fetchMeme = this.fetchMeme.bind(this);
    }
    componentDidMount() {
        axios.get('https://meme-api.herokuapp.com/gimme/desimemes')
            .then(response => {
                this.setState({ imageURL: response.data.url });
            })
            .catch(error => {
                console.log(error);
            });
    }

    fetchMeme() {
        axios.get('https://meme-api.herokuapp.com/gimme/desimemes')
            .then(response => {
                this.setState({ imageURL: response.data.url });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: "center",
                backgroundColor: "#000000",
                width: deviceWidth,
                height: deviceHeight,
            },
            headerText: {
                fontSize: 30,
                textAlign: "center",
                marginTop: 50,
                marginBottom: 20,
                color: 'white',
                fontWeight: "bold"
            },
            imageContainer: {
                width: deviceWidth,
                height: deviceWidth * 1.1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
            },
            memeImage: {
                resizeMode: 'contain',
                width: '100%',
                height: '100%'
            },
            fetchMeme: {
                marginTop: 30,
                padding: 10,
            },
            appbar: {
                width: deviceWidth,
                paddingTop: 20,
                paddingBottom: 10,
                marginBottom: 30,
            }
        });
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.appbar}>
                    <Appbar.Action icon="forwardburger" onPress={this.props.navigation.openDrawer} />
                    <Appbar.Content title="Homescreen" subtitle="Meme of the Day" />
                </Appbar.Header>
                <View style={styles.imageContainer}>
                    <Image style={styles.memeImage} source={{ uri: this.state.imageURL }}></Image>
                </View>
                <Button style={styles.fetchMeme} icon="send" onPress={this.fetchMeme} mode="contained">Fetch New Meme</Button>
            </View>
        );
    }
}


