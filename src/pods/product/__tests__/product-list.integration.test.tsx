import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "../../../test/utils";
import { ProductContainer } from "../product.container";

describe("Product List Integration Test", () => {
  it("should display products from API", async () => {
    render(<ProductContainer />);

    expect(screen.getByText("Galician Products Inventory")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Pulpo a la Gallega")).toBeInTheDocument();
    });

    expect(screen.getByText("Pulpo a la Gallega")).toBeInTheDocument();
    expect(screen.getByText("Queixo Tetilla")).toBeInTheDocument();
    expect(screen.getByText("Empanada Gallega")).toBeInTheDocument();

    expect(screen.getByText("PULPO-001")).toBeInTheDocument();
    expect(screen.getByText("QUESO-002")).toBeInTheDocument();
    expect(screen.getByText("EMPA-003")).toBeInTheDocument();
  });

  it("should show loading state initially", () => {
    render(<ProductContainer />);

    expect(screen.getByText("Galician Products Inventory")).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("generic")
        .filter((el) => el.className.includes("animate-pulse"))
    ).toHaveLength(8);
  });

  it("should display product cards with correct information", async () => {
    render(<ProductContainer />);

    await waitFor(() => {
      expect(screen.getByText("Pulpo a la Gallega")).toBeInTheDocument();
    });

    expect(
      screen.getByText(/Tradicional pulpo cocido con patatas/)
    ).toBeInTheDocument();
    expect(screen.getByText("PULPO-001")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("Min: 5")).toBeInTheDocument();
  });

  it("should show low stock indicator for products with low stock", async () => {
    render(<ProductContainer />);

    await waitFor(() => {
      expect(screen.getByText("Pulpo a la Gallega")).toBeInTheDocument();
    });

    expect(screen.getByText("Low Stock")).toBeInTheDocument();
    expect(screen.getByText("Reorder needed")).toBeInTheDocument();
  });

  it("should show stock OK for products with sufficient stock", async () => {
    render(<ProductContainer />);

    await waitFor(() => {
      expect(screen.getByText("Pulpo a la Gallega")).toBeInTheDocument();
    });

    expect(screen.getAllByText("Stock OK")).toHaveLength(2);
  });
});
