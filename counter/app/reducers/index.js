/**
 * Created by william on 2017/7/3.
 */

import {combineReducers} from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;