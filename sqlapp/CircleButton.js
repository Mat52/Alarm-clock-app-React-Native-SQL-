import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

class CircleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }



    onPress = () => this.props.PressButton(this.state.name)
    render() {
        return (
            <TouchableOpacity style={styles.touchableopacity} onPress={this.onPress}>
                <Image style={{ width: 100, height: 100 }} source={this.props.img} />
            </TouchableOpacity>
        );
    }

}
CircleButton.propTypes = {
    img: PropTypes.number.isRequired,

};

const styles = StyleSheet.create({
    touchableopacity: {

        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        width: 100,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto"




    },

})


export default CircleButton