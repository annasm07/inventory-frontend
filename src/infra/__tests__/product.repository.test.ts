import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAllProducts, createProduct } from "../product.repository";
import { server } from "../../test/mocks/server";

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("Product Repository", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Disable MSW for these tests
    server.close();
  });

  afterEach(() => {
    // Re-enable MSW after each test
    server.listen();
  });

  describe("getAllProducts", () => {
    it("should fetch all products successfully", async () => {
      const mockProducts = [
        {
          id: "1",
          name: "Test Product",
          description: "Test Description",
          sku: "TEST-001",
          stock: 10,
          minStock: 2,
          imageUrl: "https://example.com/image.jpg",
          createdAt: "2024-01-01T00:00:00Z",
          updatedAt: "2024-01-01T00:00:00Z",
        },
      ];

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const result = await getAllProducts();

      expect(fetch).toHaveBeenCalledWith("/products");
      expect(result).toEqual(mockProducts);
    });

    it("should handle fetch errors", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
      });

      await expect(getAllProducts()).rejects.toThrow(
        "Failed to fetch products: Not Found"
      );
    });
  });

  describe("createProduct", () => {
    it("should create a product successfully", async () => {
      const newProduct = {
        name: "New Product",
        description: "New Description",
        sku: "NEW-001",
        imageUrl: "https://example.com/new.jpg",
        initialStock: 5,
        minStock: 1,
      };

      const createdProduct = {
        id: "123",
        ...newProduct,
        stock: newProduct.initialStock,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => createdProduct,
      });

      const result = await createProduct(newProduct);

      expect(fetch).toHaveBeenCalledWith("/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      expect(result).toEqual(createdProduct);
    });

    it("should handle creation errors", async () => {
      const newProduct = {
        name: "New Product",
        description: "New Description",
        sku: "NEW-001",
        imageUrl: "https://example.com/new.jpg",
        initialStock: 5,
        minStock: 1,
      };

      mockFetch.mockResolvedValueOnce({
        ok: false,
        statusText: "Bad Request",
      });

      await expect(createProduct(newProduct)).rejects.toThrow(
        "Failed to create product: Bad Request"
      );
    });
  });
});
