import { API_URL } from "../common/constants/envs";
import { ProductDTO } from "./product.dto";

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
