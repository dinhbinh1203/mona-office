import axiosClient from './axiosClient';

const userApi = {
  getAllUser(params) {
    const url = '/user';
    return axiosClient.get(url, { params });
  },

  getUserById(id) {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/user';
    return axiosClient.post(url, data);
  },

  remove(id) {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  },

  update(data) {
    const url = `/user/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;

// search: https://mona-app-binh57kt.herokuapp.com/products?name_like=balo
