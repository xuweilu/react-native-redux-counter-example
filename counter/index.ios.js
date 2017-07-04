import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store/store';
import Counter from './app/components/Counter';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <Counter/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('counter', () => App);
