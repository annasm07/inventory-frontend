import React, { useCallback } from "react";
import { CreateProductDTO } from "../../../infra/product.dto";
import { Textarea } from "../../../common/components/text-area";
import { useProductForm } from "../product-form.hook";
import { Button } from "../../../common/components/button";
import { Input } from "../../../common/components/input";

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (productData: CreateProductDTO) => Promise<void>;
  isLoading?: boolean;
  initialData?: Partial<CreateProductDTO>;
  title?: string;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
  initialData,
  title = "Add New Product",
}) => {
  const {
    formData,
    errors,
    updateField,
    validateForm,
    resetForm,
    setFieldError,
  } = useProductForm(initialData);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const processedValue =
        name === "initialStock" || name === "minStock"
          ? parseInt(value) || 0
          : value;
      updateField(name, processedValue);
    },
    [updateField]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      try {
        await onSubmit(formData);
        resetForm();
        onClose();
      } catch (error) {
        console.error("Failed to create product:", error);
        // Better error handling
        if (error instanceof Error) {
          setFieldError("submit", error.message);
        } else {
          setFieldError("submit", "An unexpected error occurred");
        }
      }
    },
    [formData, validateForm, onSubmit, resetForm, onClose, setFieldError]
  );

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="form-title"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 id="form-title" className="text-2xl font-bold text-gray-800">
              {title}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              disabled={isLoading}
              className="p-1"
              aria-label="Close form"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              label="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              error={errors.name}
              isRequired
              disabled={isLoading}
            />

            <Textarea
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              placeholder="Enter product description"
              error={errors.description}
              isRequired
              disabled={isLoading}
            />

            <Input
              type="text"
              name="sku"
              label="SKU"
              value={formData.sku}
              onChange={handleInputChange}
              placeholder="Enter SKU (e.g., PROD-001)"
              error={errors.sku}
              isRequired
              disabled={isLoading}
            />

            <Input
              type="url"
              name="imageUrl"
              label="Image URL"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              error={errors.imageUrl}
              isRequired
              disabled={isLoading}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                type="number"
                name="initialStock"
                label="Initial Stock"
                value={formData.initialStock}
                onChange={handleInputChange}
                min="0"
                error={errors.initialStock}
                isRequired
                disabled={isLoading}
              />
              <Input
                type="number"
                name="minStock"
                label="Min Stock"
                value={formData.minStock}
                onChange={handleInputChange}
                min="0"
                error={errors.minStock}
                isRequired
                disabled={isLoading}
              />
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Create Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
