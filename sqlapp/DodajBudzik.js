import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, FlatList, Switch, Alert } from 'react-native';
import CircleButton from './CircleButton';
import Database from './Database';

class DodajBudzik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            checked1: false,
            number: 0
        };

    }
    onPress = () => {
        let hours = "00"
        let minutes = "00"
        Database.add(hours, minutes)
        Database.getAll()
        this.props.navigation.goBack()
        this.props.route.params.refresh()

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontSize: 50, color: "black" }}>"+" dodaje do bazy budzik z godziną 00:00 </Text>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', position: "absolute", alignItems: "center", width: "100%", bottom: 5 }}>
                    <CircleButton img={require('./plus.png')} name="zdj" PressButton={this.onPress}></CircleButton>
                </View>
            </View >
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center"

    },
    buttons1: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
    },
    buttons2: {
        flexDirection: "row",
        justifyContent: "center"
    },
    but3: {
        flex: 10,
        justifyContent: "center"
    },


    user: {
        flex: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    header: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: "center",


    },
    registerarea: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center"

    },
    text: {

        fontSize: 10
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
        borderColor: "aqua",
        color: "blue",
        textAlign: "center"

    }
});

export default DodajBudzik;

