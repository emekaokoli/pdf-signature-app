import { API_URL } from '@/API/basePath';
import { Auth } from '@/utils/Auth';
import axios, { InternalAxiosRequestConfig } from 'axios';

const fetchApi = axios.create({
  baseURL: API_URL,
});

const token = Auth.getToken();

fetchApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    if (Auth.isAuthenticated()) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

fetchApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default fetchApi;
