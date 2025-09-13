import React, { useState } from "react";
import { useProducts } from "./products.hook";
import { useCreateProduct } from "./create-product.hook";
import { LoadingSkeleton } from "./components/loading-skeleton";
import { ErrorState } from "./components/error-state";
import { EmptyState } from "./components/empty-state";
import { ProductHeader } from "./components/product-header";
import { ProductGrid } from "./components/product-grid";
import { ProductForm } from "./components/product-form";
import { CreateProductDTO } from "../../infra/product.dto";
import { Button } from "../../common/components/button";

export const ProductContainer: React.FC = () => {
  const { products, isLoading, error } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const createProductMutation = useCreateProduct();

  const handleCreateProduct = async (productData: CreateProductDTO) => {
    await createProductMutation.mutateAsync(productData);
  };

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
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <ProductHeader products={products} />
        </div>
        <Button
          onClick={() => setIsFormOpen(true)}
          variant="primary"
          leftIcon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          }
        >
          Add Product
        </Button>
      </div>
      <ProductGrid products={products} />
      <ProductForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCreateProduct}
        isLoading={createProductMutation.isPending}
        title="Add New Product"
      />
    </div>
  );
};
