import { useState, useCallback } from "react";
import { CreateProductDTO } from "../../infra/product.dto";

export const useProductForm = (initialData?: Partial<CreateProductDTO>) => {
  const [formData, setFormData] = useState<CreateProductDTO>({
    name: "",
    description: "",
    sku: "",
    imageUrl: "",
    initialStock: 0,
    minStock: 0,
    ...initialData,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = useCallback(
    (name: string, value: string | number) => {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [errors]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.sku.trim()) {
      newErrors.sku = "SKU is required";
    }
    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = "Image URL is required";
    }
    if (formData.initialStock < 0) {
      newErrors.initialStock = "Initial stock cannot be negative";
    }
    if (formData.minStock < 0) {
      newErrors.minStock = "Minimum stock cannot be negative";
    }
    if (formData.minStock > formData.initialStock) {
      newErrors.minStock = "Minimum stock cannot be greater than initial stock";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      description: "",
      sku: "",
      imageUrl: "",
      initialStock: 0,
      minStock: 0,
    });
    setErrors({});
  }, []);

  const setFieldError = useCallback((field: string, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    formData,
    errors,
    updateField,
    validateForm,
    resetForm,
    setFieldError,
    clearFieldError,
  };
};
