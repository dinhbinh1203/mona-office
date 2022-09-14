import axiosClient from './axiosClient';

const categoriesApi = {
  getCategoriesAll() {
    const url = '/categories';
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 12,
      },
    });
  },
};

export default categoriesApi;
