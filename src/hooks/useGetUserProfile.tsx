import { useToast } from '@/components/ui/use-toast';
import { Userprofile } from '@/modules/interface/user-module';
import { getRequest } from '@/utils/apiActions';
import handleApiError from '@/utils/handleApiError';
import { useQuery } from 'react-query';

type DataProps = {
  data: Userprofile

}
export const useGetUserProfile = () => {
  const { toast } = useToast();
  const { data, isLoading, ...rest } = useQuery(['userProfile'], () =>
    getRequest({
      url: '/user/profile'
    }),
    {
      onError(error) {
        const errors = handleApiError(error)
        toast({
          variant: 'destructive',
          title: 'An Error has occured',
          description: errors,
        });

      },
      onSuccess(data: DataProps) {
        return data
      },
    }

  );


  return {
    data,
    isLoading,
    ...rest,
  };
};
