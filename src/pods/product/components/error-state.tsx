import React from "react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryButtonText?: string;
  icon?: string;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Error Loading Products",
  message = "Something went wrong while loading.",
  onRetry,
  retryButtonText = "Try Again",
  icon = "⚠️",
  className = "container mx-auto px-4 py-8",
}) => {
  return (
    <div className={className}>
      <div className="text-center">
        <div className="text-red-500 text-6xl mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            {retryButtonText}
          </button>
        )}
      </div>
    </div>
  );
};
