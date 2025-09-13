import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../infra/product.repository";
import { ProductDTO } from "../infra/product.dto";

export const useProducts = (params?: string) => {
  const { data, isLoading, error } = useQuery<ProductDTO[], Error>({
    queryKey: ["products", params],
    queryFn: () => getAllProducts(params),
    staleTime: 5 * 60 * 1000,
  });

  return {
    products: data,
    isLoading,
    error,
  };
};
