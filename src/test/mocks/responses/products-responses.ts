import { ProductDTO } from "../../../infra/product.dto";

export const allProductsResponse: ProductDTO[] = [
  {
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
  },
  {
    id: "2",
    name: "Queixo Tetilla",
    description: "Queso gallego de leche de vaca con forma de tetilla, DOP",
    sku: "QUESO-002",
    stock: 18,
    minStock: 3,
    imageUrl:
      "https://pepekitchen.com/wp-content/uploads/2009/07/queso-de-tetilla2.jpg",
    createdAt: "2024-02-03T09:15:00Z",
    updatedAt: "2024-09-10T16:45:00Z",
  },
  {
    id: "3",
    name: "Empanada Gallega",
    description: "Empanada tradicional gallega con atún, pimientos y cebolla",
    sku: "EMPA-003",
    stock: 1,
    minStock: 2,
    imageUrl:
      "https://www.gastronomistas.com/wp-content/uploads/2019/03/empanada-gallega.jpg",
    createdAt: "2024-03-10T11:20:00Z",
    updatedAt: "2024-09-11T08:30:00Z",
  },
];
