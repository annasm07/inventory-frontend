import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../infra/product.repository";
import { CreateProductDTO } from "../../infra/product.dto";
import { inventoryKeys } from "../../lib/query-keys-factory";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productData: CreateProductDTO) => createProduct(productData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [inventoryKeys.products()] });
    },
  });
};
