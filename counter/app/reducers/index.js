import {combineReducers} from 'redux';
import counter from './counter';
import products from './products';

const rootReducer = combineReducers({
    counter,
    products,
});

export default rootReducer;