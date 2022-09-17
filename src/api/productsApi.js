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

  search(params) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  searchName(params) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
};

export default productsApi;

// search: https://mona-app-binh57kt.herokuapp.com/products?name_like=balo
