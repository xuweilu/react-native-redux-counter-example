/**
 * Created by william on 2017/7/3.
 */

import * as types from '../actionTypes';

let ActionCreators = {
    increment() {
        return (dispatch) => {
            dispatch({type: types.INCREMENT});
        }
    },
    decrement() {
        return (dispatch) => {
            dispatch({type: types.DECREMENT});
        }
    }
};

export default ActionCreators;