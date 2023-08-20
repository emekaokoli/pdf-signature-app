import { useToast } from '@/components/ui/use-toast';
import { postRequest } from '@/utils/apiActions';
import handleApiError from '@/utils/handleApiError';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export type SignaturePayload = {
  file: string; 
  type: 'Initial' | 'Signature' | 'NotaryStamp' | 'NotaryTraditionalSeal' | 'NotaryDigitalSeal' | 'CompanyStamp' | 'CompanySeal' | 'Photograph' | 'Camera' | 'LeftThumbFinger' | 'LeftPointerFinger' | 'LeftMiddleFinger' | 'LeftRingFinger' | 'LeftPinkyFinger' | 'RightThumbFinger' | 'RightPointerFinger' | 'RightMiddleFinger' | 'RightRingFinger' | 'RightPinkyFinger' | 'Text';
  category: 'Draw' | 'Type' | 'Upload';
  value: string;
};


export const useSaveSignature = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient()

  const navigate = useNavigate();

  const { mutate, isLoading, ...rest } = useMutation(
    ({ payload }: { payload: SignaturePayload  }) =>
      postRequest({
        url: '/prints',
        payload,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['upload']);
        toast({
          variant: 'default',
          title: 'Success',
          description: 'Signatured saved.',
        });
        navigate('/home');
      },
      onError(error) {
        const errors = handleApiError(error);
        toast({
          variant: 'destructive',
          title: 'An Error has occured',
          description: errors,
        });
      },
    }
  );

  return {
    SaveSignature: mutate,
    isLoading,
    ...rest,
  };
};
