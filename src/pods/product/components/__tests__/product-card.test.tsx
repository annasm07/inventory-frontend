import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "../../../../test/utils";
import { ProductCard } from "../product-card";
import { ProductDTO } from "../../../../infra/product.dto";

const mockProduct: ProductDTO = {
  id: "1",
  name: "Pulpo a la Gallega",
  description:
    "Tradicional pulpo cocido con patatas, aceite de oliva y pimentón dulce",
  sku: "PULPO-001",
  stock: 25,
  minStock: 5,
  imageUrl: "https://imag.bonviveur.com/pulpo-a-la-gallega-recien-hecho.jpg",
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-09-11T14:20:00Z",
};

const lowStockProduct: ProductDTO = {
  ...mockProduct,
  id: "2",
  stock: 2,
  minStock: 5,
};

describe("ProductCard Component", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Pulpo a la Gallega")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Tradicional pulpo cocido con patatas, aceite de oliva y pimentón dulce"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("PULPO-001")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("Min: 5")).toBeInTheDocument();
  });

  it("shows low stock indicator when stock is below minimum", () => {
    render(<ProductCard product={lowStockProduct} />);

    expect(screen.getByText("Low Stock")).toBeInTheDocument();
    expect(screen.getByText("Reorder needed")).toBeInTheDocument();
  });

  it("shows stock OK when stock is above minimum", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.queryByText("Low Stock")).not.toBeInTheDocument();
    expect(screen.getByText("Stock OK")).toBeInTheDocument();
  });

  it("renders product image with alt text", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("Pulpo a la Gallega");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.imageUrl);
  });

  it("handles image load error", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("Pulpo a la Gallega");

    // Simulate image load error
    fireEvent.error(image);

    // Should show placeholder image
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("data:image/svg+xml")
    );
  });

  it("applies correct CSS classes for low stock", () => {
    render(<ProductCard product={lowStockProduct} />);

    const lowStockBadge = screen.getByText("Low Stock");
    expect(lowStockBadge).toHaveClass("bg-red-500");

    const statusBadge = screen.getByText("Reorder needed");
    expect(statusBadge).toHaveClass("bg-red-100", "text-red-700");
  });

  it("applies correct CSS classes for normal stock", () => {
    render(<ProductCard product={mockProduct} />);

    const statusBadge = screen.getByText("Stock OK");
    expect(statusBadge).toHaveClass("bg-green-100", "text-green-700");
  });
});
