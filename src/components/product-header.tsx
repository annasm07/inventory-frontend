import React from "react";
import { ProductDTO } from "../infra/product.dto";

interface ProductHeaderProps {
  title?: string;
  subtitle?: string;
  products?: ProductDTO[];
  className?: string;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  title = "Galician Products Inventory",
  subtitle = "Discover our collection of authentic Galician products",
  products = [],
  className = "mb-8",
}) => {
  const inStockCount = products.filter((p) => p.stock > p.minStock).length;
  const lowStockCount = products.filter((p) => p.stock <= p.minStock).length;

  return (
    <div className={className}>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
      {products.length > 0 && (
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            {inStockCount} In Stock
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            {lowStockCount} Low Stock
          </span>
        </div>
      )}
    </div>
  );
};
