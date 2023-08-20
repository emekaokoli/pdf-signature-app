import { PdfData } from "@/modules/interface/user-module";
import { getRequest } from "@/utils/apiActions";
import { useQuery } from "react-query";


export const useGetAllDocuments = () => {
  const { data, isLoading, ...rest } = useQuery<PdfData[]>(['get-pdfs'], () =>
    getRequest<PdfData[]>({
      url: '/documents'
    })
  );

  return {
    pdfFiles: data,
    isLoading,
    ...rest
  }
}

