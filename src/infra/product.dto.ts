export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  sku: string;
  stock: number;
  minStock: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductDTO {
  name: string;
  description: string;
  sku: string;
  imageUrl: string;
  initialStock: number;
  minStock: number;
}

export interface AdjustStockDTO {
  units: number;
}
