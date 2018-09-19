import axios from 'axios';

const URL = 'http://localhost:3000';

const getProducts = (page, limit, sortBy) => {
    return axios.get(`${URL}/api/products?_page=${page}&_limit=${limit}&_sort=${sortBy}`);
}

export default getProducts;
