import types from '../constants';
import API from '../api/API';

let ActionCreators = {
    fetchProducts() {
        return (dispatch) => {
            dispatch({type: types.REQUEST_PRODUCTS});
            API.fetchProductsAsync().then(
                (data) => dispatch({type: types.RECEIVE_PRODUCTS, success: true, data}),
                (error) => dispatch({type: types.RECEIVE_PRODUCTS, success: false, error})
            )
        }
    },
};

export default ActionCreators;