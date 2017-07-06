import React, {Component} from 'react';
import ActionCreators from '../actions/ActionCreators';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SectionList} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

class ProductsList extends Component {
    _onPressToDetails(item) {
        this.props.navigator.push({
            screen: 'example.ProductItemDetails',
            title: 'Details',
            passProps: item,

        })
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.products}
                          renderItem={({item}) =>
                              <TouchableOpacity onPress={this._onPressToDetails.bind(this, item)}>
                                  <Text style={styles.item}>{item.name}</Text>
                              </TouchableOpacity>}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => (
    {
        products: state.products,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        fetchProducts: () => dispatch(ActionCreators.fetchProducts()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);