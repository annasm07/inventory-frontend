import React from "react";
import { ProductDTO } from "../infra/product.dto";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: ProductDTO[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
}) => {
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
