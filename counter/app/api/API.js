import {API_URLS, API_HEADERS} from '../constants';

let API = {
    async fetchProductsAsync(){
        try {
            let response = await fetch(API_URLS.get('products'), {
                headers: API_HEADERS,
            }).then((response) => response.json());
            return (response);
        } catch (error) {
            throw Error(error);
        }
    }
};

export default API;