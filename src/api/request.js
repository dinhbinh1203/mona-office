import axios from 'axios';

const request = axios.create({
  baseURL: 'https://mona-app-binh57kt.herokuapp.com/',
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const getApi = async (item) => {
  const res = await request.get(`${item}`);
  return res;
};

export default request;
