import { getApi, get } from './request';

const categoriesApi = {
  getCategoriesAll() {
    const url = '/categories';
    return getApi(url);
  },

  getCategoryById(id) {
    const url = `/categories/${id}/products`;
    return getApi(url);
  },
};

export default categoriesApi;
