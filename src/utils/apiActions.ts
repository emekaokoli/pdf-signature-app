import fetchApi from '@/API/fetchApi';
import { AxiosRequestConfig } from 'axios';

type FuncProp<T> = {
  url: string;
  payload: T;
  config?: AxiosRequestConfig;
};

export const postRequest = async <T, R>({
  url,
  payload,
}: FuncProp<T>) => {
  const response = await fetchApi.post<R>(url, payload);

  const { data } = response;

  return data;
};

export const getRequest = async <R>({ url }: { url: string }) => {
  const response = await fetchApi.get<R>(url);

  const { data } = response;

  return data;
};
