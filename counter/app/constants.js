export const API_DOMAIN = 'http://localhost:5500';

export const API_HEADERS = {
    'Content-Type': 'application/json'
};

export const API_URLS = new Map([
    ['products', `${API_DOMAIN}/products`],
]);

export default {
    REQUEST_PRODUCTS: 'request products',
    RECEIVE_PRODUCTS: 'receive products',
}