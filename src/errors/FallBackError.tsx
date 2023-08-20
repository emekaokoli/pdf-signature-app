import { Button } from '@/components/ui/button';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

export function FallBackError() {

  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an application error!
          <Button onClick={() => resetErrorBoundary()} variant='secondary'>Try again</Button>
        </div>
      )}
    >
    </ErrorBoundary>
  )
}