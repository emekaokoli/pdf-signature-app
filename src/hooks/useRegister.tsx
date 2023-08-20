import { useToast } from '@/components/ui/use-toast';
import { registerPayload } from '@/modules/auth/register';
import { postRequest } from '@/utils/apiActions';
import handleApiError from '@/utils/handleApiError';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export interface LoginResonse {
  error: string;
  message: string;
}

export const useRegister = () => {
  const { toast } = useToast();
  const navigate = useNavigate();


  const { mutate, isLoading, ...rest } = useMutation(
    ({ payload }: { payload: registerPayload }) =>
      postRequest<registerPayload, LoginResonse>({
        url: '/user/register',
        payload,
      }),
    {
      onSuccess: () => {
        toast({
          variant: 'default',
          title: 'Success',
          description: 'Successfully registered.',
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
    register: mutate,
    isLoading,
    ...rest,
  };
};
