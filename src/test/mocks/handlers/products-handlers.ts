import { http, HttpResponse } from "msw";
import { ProductDTO } from "../../../infra/product.dto";
import { allProductsResponse } from "../responses/products-responses";

export const allProductsPath = "**/products";

let mockProducts: ProductDTO[] = [...allProductsResponse];

export const allProductsHandler = http.get(allProductsPath, () => {
  return HttpResponse.json(mockProducts);
});
