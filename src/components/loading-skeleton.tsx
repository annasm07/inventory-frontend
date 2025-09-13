import React from "react";

interface LoadingSkeletonProps {
  count?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  count = 1,
  className = "",
}) => {
  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 bg-gray-300 rounded mb-3 w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded mb-3"></div>
        <div className="flex justify-between">
          <div className="h-8 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};
