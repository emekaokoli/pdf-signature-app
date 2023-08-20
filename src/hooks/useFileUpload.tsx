import { useToast } from '@/components/ui/use-toast';
import { postRequest } from '@/utils/apiActions';
import handleApiError from '@/utils/handleApiError';
import { useMutation, useQueryClient } from 'react-query';

export interface UploadPayload {
  files: Array<File>;
  title: string;
}

export type ErrorResponse = {
  message: string
  errors: {
    files: Array<string>
  }
}

type Errors = {
  data: {
    error: string
    code: number,
    success: boolean
  }
}

export function useFileUpload() {
  const queryClient = useQueryClient()


  const { toast } = useToast();

  const { mutate, isLoading, ...rest } = useMutation(['upload'],
    ({ payload }: { payload: UploadPayload }) => {


      const formData = new FormData();
      formData.append('title', payload.title);

      payload.files.forEach((base64String) => {
        formData.append('files[]', base64String);
      });


      return postRequest<FormData, Errors>({
        url: '/document-upload-convert',
        payload: formData,

      })
    }
    ,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['upload']);
        toast({
          variant: 'default',
          title: 'Success',
          description: 'File upload was successfull',
        });
      },
      onError(error) {
        const errors = handleApiError(error);
        console.log({ errors });

        toast({
          variant: 'destructive',
          title: 'Upload error has occured',
          description: errors,
        });
      },
    }
  );

  return {
    upload: mutate,
    isLoading,
    ...rest,
  };
};