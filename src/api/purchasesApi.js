import axiosClient from './axiosClient';

const purchasesApi = {
  getAll(params) {
    const url = '/purchases';
    return axiosClient.get(url, { params });
  },

  getPurchasesById(id) {
    const url = `/purchases/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/purchases';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/purchases/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/purchases/${id}`;
    return axiosClient.delete(url);
  },
};

export default purchasesApi;

// search: https://mona-app-binh57kt.herokuapp.com/products?name_like=balo
