
import { useToast } from '@/components/ui/use-toast';
import React from 'react';

interface Props {
  error: string
}

const DisplayError = ({ error }: Props) => {
  const { toast } = useToast();

  React.useEffect(() => {
    // since `toast` returns an object with { id, dismiss, update }
    const toastResult = toast({
      variant: 'destructive',
      title: 'An error has occured',
      description: JSON.stringify(error),
    });

    // Dismiss the toast after 5 seconds
    const timeout = setTimeout(toastResult.dismiss, 5000);
    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);

  }, [error]);

  return null
};

export default DisplayError;
