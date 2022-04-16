import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, FlatList, Switch, Alert } from 'react-native';
import CircleButton from './CircleButton';
import { ScrollView } from 'react-native';
import ListItem from './ListItem';
import Database from './Database';
import { TouchableNativeFeedback } from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            checked1: false,
            number: 0
        };

    }
    refresh = () => {

        Database.getAll().then((all) => {
            console.log(all)
            all = JSON.parse(all)
            let tab = []
            for (let i = 0; i < all.rows.length; i++) {
                tab.push(all.rows._array[i])
            }
            this.setState({
                data: tab
            })
            console.log(this.state.data)

        })
    }
    onPress = () => {
        this.props.navigation.navigate("dodaj budzik", { refresh: this.refresh })
    }

    delete = (data) => {
        Database.remove(data)
        let toremove = this.state.data
        console.log(toremove)
        toremove = toremove.filter(function (obj) {
            return obj.id !== data;
        });
        this.setState({
            data: toremove
        })


    }

    componentDidMount() {

        Database.getAll().then((all) => {

            all = JSON.parse(all)
            let tab = []
            for (let i = 0; i < all.rows.length; i++) {
                tab.push(all.rows._array[i])
            }
            this.setState({
                data: tab
            })
            console.log(this.state.data)

        })
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ width: "100%", flex: 5 }} >

                    <FlatList

                        key={this.state.id}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem id={item.id} hour={item.hour} minute={item.minute} pn={item.pn} wt={item.wt} sr={item.sr} czw={item.czw} pt={item.pt} sob={item.sob} ndz={item.ndz} delete={this.delete} switch={item.switch}></ListItem>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />

                </View >

                <View >
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
        alignContent: "center"


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

export default List;

