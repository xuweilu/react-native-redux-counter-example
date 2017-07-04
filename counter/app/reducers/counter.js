/**
 * Created by william on 2017/7/3.
 */

import * as types from '../constants';
import update from 'react-addons-update';

const counter = (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return update(state, {$set: state + 1});
        case types.DECREMENT:
            return update(state, {$set: state - 1});
        default:
            return state;
    }
};

export default counter;