import fetchApi from "@/API/fetchApi";
import { useQuery } from "react-query";


export const usefetchWithParams = (documentId: string) => useQuery(['one-pdf', { documentId }], () =>
  fetchApi.get(`/documents/${documentId}`)
);

