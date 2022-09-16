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

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },

  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },
};

export default productsApi;
