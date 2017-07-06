import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import registerScreens from './app/screens';

import store from './app/store/store';

registerScreens(store, Provider);

const navigatorStyle = {
    navBarTranslucent: true,
    drawUnderNavBar: true,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    statusBarTextColorScheme: 'light',
    drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
    screen: {
        screen: 'example.ProductsList',
        title: 'Welcome',
        navigatorStyle: navigatorStyle,
    }
});


