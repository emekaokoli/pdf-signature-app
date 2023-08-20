import { useToast } from '@/components/ui/use-toast';
import { loginPayload } from '@/modules/auth/login';
import { Auth } from '@/utils/Auth';
import { postRequest } from '@/utils/apiActions';
import handleApiError from '@/utils/handleApiError';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export interface LoginResonse {
  token: string;
  token_type: string;
}

export const useSignIn = () => {
  const { toast } = useToast();
  const { setToken } = Auth;
  const navigate = useNavigate();

  const { mutate, isLoading, ...rest } = useMutation(
    ({ payload }: { payload: loginPayload }) =>
      postRequest<loginPayload, LoginResonse>({
        url: '/user/login',
        payload,
      }),
    {
      onSuccess: (values) => {
        setToken(values?.token);
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
    signIn: mutate,
    isLoading,
    ...rest,
  };
};
