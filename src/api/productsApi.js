import { getApi } from './request';

import axiosClient from './axiosClient';

const productsApi = {
  getAllProducts(params) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
};

export default productsApi;
