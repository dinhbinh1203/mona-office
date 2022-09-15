import axiosClient from './axiosClient';

const adminApi = {
  getAdmin() {
    const url = '/admin';
    return axiosClient.get(url);
  },
};

export default adminApi;
