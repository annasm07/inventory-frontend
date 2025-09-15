/**
 * Query Keys Factory
 * @see https://tkdodo.eu/blog/effective-react-query-keys
 */
export const inventoryKeys = {
  products: () => ["products"],
  paginateAllProducts: <T>(queryConfig: T) =>
    [...inventoryKeys.products(), { queryConfig }] as const,
};
