import axiosClient from './axiosClient';

const ordersApi = {
  getAllOrders(params) {
    const url = '/orders';
    return axiosClient.get(url, { params });
  },

  getOrderById(id) {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/orders';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/orders/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/orders/${id}`;
    return axiosClient.delete(url);
  },
};

export default ordersApi;

// search: https://mona-app-binh57kt.herokuapp.com/products?name_like=balo
