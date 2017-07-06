import types from '../constants';
import update from 'react-addons-update';

const products = (state = [], action) => {
    switch (action.type) {
        case types.RECEIVE_PRODUCTS:
            if (action.success) {
                return update(state, {$set: action.data});
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default products;