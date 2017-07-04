/**
 * Created by william on 2017/7/3.
 */

import * as types from '../constants';

const initialState = {
    count: 0
};

const counter = (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return(state + 1);
        case types.DECREMENT:
            return(state - 1);
        default:
            return state;
    }
};

export default counter;