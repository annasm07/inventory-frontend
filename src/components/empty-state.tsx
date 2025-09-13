import React from "react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Products Found",
  message = "There are no products in the inventory at the moment.",
  icon = "📦",
  className = "container mx-auto px-4 py-8",
}) => {
  return (
    <div className={className}>
      <div className="text-center">
        <div className="text-gray-400 text-6xl mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};
