/**
 * Created by william on 2017/7/3.
 */

import React, {Component} from 'react';
import ActionCreators from '../actions/ActionCreators';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={this.props.increment} style={styles.button}>
                    <Text>up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.decrement} style={styles.button}>
                    <Text>down</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => (
    {
        counter: state.counter,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        increment: () => dispatch(ActionCreators.increment()),
        decrement: () => dispatch(ActionCreators.decrement()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);