import axiosClient from './axiosClient';

const productsApi = {
  getAllProducts(params) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  getProductById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productsApi;
