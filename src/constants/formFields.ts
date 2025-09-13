export const PRODUCT_FORM_FIELDS = [
  {
    name: "name",
    type: "text",
    label: "Product Name",
    placeholder: "Enter product name",
    required: true,
  },
  {
    name: "description",
    type: "textarea",
    label: "Description",
    placeholder: "Enter product description",
    required: true,
    rows: 3,
  },
  {
    name: "sku",
    type: "text",
    label: "SKU",
    placeholder: "Enter SKU (e.g., PROD-001)",
    required: true,
  },
  {
    name: "imageUrl",
    type: "url",
    label: "Image URL",
    placeholder: "https://example.com/image.jpg",
    required: true,
  },
  {
    name: "initialStock",
    type: "number",
    label: "Initial Stock",
    placeholder: "0",
    required: true,
    min: 0,
  },
  {
    name: "minStock",
    type: "number",
    label: "Min Stock",
    placeholder: "0",
    required: true,
    min: 0,
  },
] as const;

export type FormField = (typeof PRODUCT_FORM_FIELDS)[number];
