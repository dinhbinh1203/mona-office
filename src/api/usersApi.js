import axiosClient from './axiosClient';

const usersApi = {
  getAllUser() {
    const url = '/users';
    return axiosClient.get(url);
  },

  getUserById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/users';
    return axiosClient.post(url, data);
  },

  remove(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },

  update(data) {
    const url = `/users/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default usersApi;

// search: https://mona-app-binh57kt.herokuapp.com/products?name_like=balo
