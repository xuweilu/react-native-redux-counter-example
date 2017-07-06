import {Navigation} from 'react-native-navigation';

import ProductsList from './components/ProductsList';
import ProductItemDetails from './components/ProductItemDetails';

export default registerScreens = (store, Provider) => {
    Navigation.registerComponent('example.ProductsList', () => ProductsList, store, Provider);
    Navigation.registerComponent('example.ProductItemDetails', () => ProductItemDetails, store, Provider);
};