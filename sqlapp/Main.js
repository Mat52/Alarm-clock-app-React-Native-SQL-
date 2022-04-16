import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Database from "./Database";
import * as Font from "expo-font";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

            fontloaded: false
        };

    }

    componentDidMount = async () => {
        await Font.loadAsync({
            'myfont': require('./roboto-black.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
        });
        this.setState({ fontloaded: true })
        Database.createTable();
    }


    onPress = () => {
        this.props.navigation.navigate("lista budzików")
    }

    render() {
        return (
            this.state.fontloaded
                ?

                <TouchableOpacity onPress={this.onPress} style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 50,
                            color: "white"

                        }}>Sqlite App</Text>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 25,
                            color: "white"
                        }}>manage sqlite app</Text>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 25,
                            color: "white"
                        }}>use animation</Text>
                        <Text style={{
                            fontFamily: 'myfont',
                            fontSize: 25,
                            color: "white"
                        }}>use ring</Text>

                    </View>

                </TouchableOpacity>
                :
                null


        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        backgroundColor: '#2596be',
        alignItems: "center",
        justifyContent: "center"


    },
    registerarea: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"

    },
    text: {
        textAlign: "center",
        fontSize: 43,
        color: "white",
        width: 400
    },
    textdata: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 5,
        borderColor: "#2596be",
        color: "#2596be",
        textAlign: "center"

    }
});

export default Main;

