import React from "react";
import { useProducts } from "../hooks/products.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { ErrorState } from "./error-state";
import { EmptyState } from "./empty-state";
import { ProductHeader } from "./product-header";
import { ProductGrid } from "./product-grid";

export const ProductList: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ProductHeader title="Galician Products Inventory" />
        <LoadingSkeleton
          count={8}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        onRetry={() => window.location.reload()}
        message={
          error.message || "Something went wrong while loading the products."
        }
      />
    );
  }

  if (!products || products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductHeader products={products} />
      <ProductGrid products={products} />
    </div>
  );
};
