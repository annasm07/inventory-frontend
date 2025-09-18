import {
  FallbackProps,
  ErrorBoundary as OriginalErrorBoundary,
} from "react-error-boundary";
import { ReactComponent as ErrorBoundaryImage } from "../../assets/error_boundary_img.svg";
import { Button } from "../../common/components/button";

const ErrorBoundaryInner = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <ErrorBoundaryImage className="w-32 h-32 mx-auto mb-4" />
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been
            notified and we're working to fix this issue.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            aria-label="Refresh the page"
            onClick={resetErrorBoundary}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Refresh the page
          </Button>

          <p className="text-sm text-gray-500">
            If the problem persists, please contact support
          </p>
        </div>
      </div>
    </div>
  );
};

export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const handleGoToDashboard = () => {
    window.location.reload();
  };

  return (
    <OriginalErrorBoundary
      FallbackComponent={ErrorBoundaryInner}
      onReset={handleGoToDashboard}
    >
      {children}
    </OriginalErrorBoundary>
  );
};
