import axiosClient from './axiosClient';

const newsApi = {
  getAllNews() {
    const url = '/news';
    return axiosClient.get(url);
  },

  getNewById(id) {
    const url = `/news/${id}`;
    return axiosClient.get(url);
  },
};

export default newsApi;
