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

  getCategory(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url, id);
  },

  getProductCategory(id) {
    const url = `/categories/${id}/products`;
    return axiosClient.get(url, id);
  },
};

export default categoriesApi;
