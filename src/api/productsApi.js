import { getApi } from './request';

const productsApi = {
  getProductsAll() {
    const url = '/products';
    return getApi(url);
  },

  getProductById(id) {
    const url = `/products/${id}`;
    return getApi(url);
  },
};

export default productsApi;
