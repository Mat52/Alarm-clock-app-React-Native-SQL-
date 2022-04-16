import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Switch } from 'react-native';
import { Animated } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: this.props.hour,
            minute: this.props.minute,
            height: new Animated.Value(150), // początkowa wartość wysokości itema
            expanded: false, // zwiniętyheight: new Animated.Value(200), // początkowa wartość wysokości itema
            pn: "",
            wt: "",
            sr: "",
            czw: "",
            pt: "",
            sob: "",
            ndz: "",
            switch: false

        };
        this.toValue = 0  // przechowanie wartości animowanej, tutaj wysokości
    }
    onPress = () => {
        console.log("siema")

        if (!this.state.expanded) this.toValue = 220
        else this.toValue = 150

        Animated.spring(this.state.height, {
            toValue: this.toValue,
            useNativeDriver: false,
        }).start();

        this.setState({
            expanded: !this.state.expanded

        })

    }
    onDayChange = (data) => {
        if (data == "Ndz.") {
            let datawithoutlast = data.slice(0, -1)
            datawithoutlast = datawithoutlast.toLowerCase();
            console.log(this.state[datawithoutlast])
            if (this.state[datawithoutlast] == "") {
                this.setState({
                    [datawithoutlast]: data
                })
            }
            else {
                this.setState({
                    [datawithoutlast]: ""
                })
            }
        }
        else {
            let datawithoutlast = data.slice(0, -2)
            datawithoutlast = datawithoutlast.toLowerCase();
            console.log(this.state[datawithoutlast])
            if (this.state[datawithoutlast] == "") {
                this.setState({
                    [datawithoutlast]: data
                })
            }
            else {
                this.setState({
                    [datawithoutlast]: ""
                })
            }
        }
    }

    toggleSwitch = () => {
        console.log(this.state.switch)
        this.setState({
            switch: !this.state.switch
        })





    }
    delete = () => {
        this.props.delete(this.props.id)

    }
    componentDidMount() {
        if (this.props.pn == "true") {
            this.setState({
                pn: "Pn.,"
            })
        }
        if (this.props.wt == "true") {
            this.setState({
                wt: "Wt.,"
            })
        }
        if (this.props.sr == "true") {
            this.setState({
                sr: "Śr.,"
            })
        }
        if (this.props.czw == "true") {
            this.setState({
                czw: "Czw.,"
            })
        }
        if (this.props.pt == "true") {
            this.setState({
                pt: "Pt.,"
            })
        }
        if (this.props.sob == "true") {
            this.setState({
                sob: "Sob.,"
            })
        } if (this.props.ndz == "true") {
            this.setState({
                ndz: "Ndz.,"
            })
        }


    }

    render() {
        return (


            <View style={styles.container}>
                <View style={styles.itemstyle}>
                    <View style={styles.viewelement0}>
                        <Text style={styles.text1}> {this.props.hour}:{this.props.minute}</Text>
                    </View>
                    <View style={styles.viewelement0}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.switch ? "blue" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.toggleSwitch()}
                            value={this.state.switch}
                        />
                    </View>
                </View>
                <Animated.View style={{

                    height: this.state.height, // animowany styl, tutaj wysokość View


                }} >
                    {
                        <View style={{ height: 220 }}>
                            <View style={styles.itemstyle}>
                                <TouchableOpacity style={styles.viewelement0} onPress={this.delete}>
                                    <Image style={{ width: 50, height: 50, marginTop: 20, marginRight: 20 }} source={require('./trash.png')}></Image>
                                </TouchableOpacity>
                                {!this.state.expanded
                                    ?
                                    <TouchableNativeFeedback style={styles.viewelement1} background={TouchableNativeFeedback.Ripple('aqua', true)} onPress={this.onPress}>
                                        <View style={{ width: 50, height: 50, marginTop: 20, marginRight: 20, backgroundColor: "white" }}>
                                            <Image style={{ width: 50, height: 50 }} source={require('./expand.png')}></Image>
                                        </View>

                                    </TouchableNativeFeedback>

                                    : <TouchableNativeFeedback style={styles.viewelement1} background={TouchableNativeFeedback.Ripple('aqua', true)} onPress={this.onPress}>
                                        <View style={{ width: 50, height: 50, backgroundColor: "white", marginTop: 20, marginRight: 20 }}>
                                            <Image style={{ width: 50, height: 50 }} source={require('./collapse.png')}></Image>
                                        </View>

                                    </TouchableNativeFeedback>
                                }




                            </View>
                            {!this.state.expanded ?
                                <View style={styles.itemstyle}>
                                    <Text style={{ fontSize: 18 }}>{this.state.pn}{this.state.wt}{this.state.sr}{this.state.czw}{this.state.pt}{this.state.sob}{this.state.ndz}</Text>

                                </View>
                                :
                                <View style={styles.itemstyle22}>
                                    {this.state.pn == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Pn.,")}>Pn</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Pn.,")}>Pn</Text></TouchableOpacity>
                                    }
                                    {this.state.wt == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Wt.,")}>Wt</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Wt.,")}>Wt</Text></TouchableOpacity>
                                    }
                                    {this.state.sr == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Sr.,")}>Śr</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Sr.,")}>Śr</Text></TouchableOpacity>
                                    }
                                    {this.state.czw == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Czw.,")}>Czw</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Czw.,")}>Czw</Text></TouchableOpacity>
                                    }
                                    {this.state.pt == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Pt.,")}>Pt</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Pt.,")}>Pt</Text></TouchableOpacity>
                                    }{this.state.sob == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Sob.,")}>Sob</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Sob.,")}>Sob</Text></TouchableOpacity>
                                    }
                                    {this.state.ndz == "" ?
                                        <TouchableOpacity style={styles.day}><Text style={styles.textday} onPress={() => this.onDayChange("Ndz.")}>Ndz</Text></TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.dayon}><Text style={styles.textday} onPress={() => this.onDayChange("Ndz.")}>Ndz</Text></TouchableOpacity>
                                    }





                                </View>



                            }



                        </View>
                    }
                </Animated.View>



            </View >
        );
    }

}


const styles = StyleSheet.create({
    container: {

    },
    itemstyle: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        justifyContent: "space-between",
        flexDirection: "row"
    },
    itemstyle22: {
        flexDirection: "row",
        justifyContent: "space-between",
        justifyContent: "center",

    },

    viewelement0: {
        textAlign: "left",
        margin: 10,



    },
    viewelement1: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        width: 100,
        height: 100,



    },
    viewelement2: {

    },
    viewelement3: {

    },
    text: {
        fontSize: 15
    },
    text1: {
        fontSize: 50
    },
    day: {
        width: 55,
        height: 55,
        borderRadius: 50,
        borderWidth: 1,
        textAlign: "center",
        lineHeight: 5,
        justifyContent: "center",
        borderColor: "white"


    },
    dayon: {
        width: 55,
        height: 55,
        borderRadius: 50,
        borderWidth: 1,
        textAlign: "center",
        lineHeight: 5,
        justifyContent: "center",
        borderColor: "white",
        backgroundColor: "aqua"


    },
    textday: {
        textAlign: "center"
    }
})
export default ListItem