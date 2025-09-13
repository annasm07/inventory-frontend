import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../infra/product.repository";
import { CreateProductDTO } from "../../infra/product.dto";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productData: CreateProductDTO) => createProduct(productData),
    onSuccess: () => {
      // Invalidate and refetch products after successful creation
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
