import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SectionList} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

class ProductItemDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.props.description}</Text>
                <Text style={styles.item}>Hello</Text>
                <Text style={styles.item}>Hello</Text>
            </View>
        )
    }
}

export default ProductItemDetails;