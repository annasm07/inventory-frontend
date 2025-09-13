import { API_URL } from "../common/constants/envs";
import { ProductDTO, CreateProductDTO } from "./product.dto";

export const getAllProducts = async (
  params?: string
): Promise<ProductDTO[]> => {
  const response = await fetch(
    `${API_URL}/products${params ? `?${params}` : ""}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const products: ProductDTO[] = await response.json();
  return products;
};

export const createProduct = async (
  productData: CreateProductDTO
): Promise<ProductDTO> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error(`Failed to create product: ${response.statusText}`);
  }

  const product: ProductDTO = await response.json();
  return product;
};
