import React, { forwardRef } from "react";

export type TextareaVariant = "default" | "error" | "success";

export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  variant?: TextareaVariant;
  textareaSize?: TextareaSize;
  label?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const variantClasses: Record<TextareaVariant, string> = {
  default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
  error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  success: "border-green-500 focus:border-green-500 focus:ring-green-500",
};

const sizeClasses: Record<TextareaSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const resizeClasses: Record<NonNullable<TextareaProps["resize"]>, string> = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "default",
      textareaSize = "md",
      label,
      error,
      helperText,
      isRequired = false,
      resize = "vertical",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const textareaId =
      id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const currentVariant = hasError ? "error" : variant;

    const baseClasses =
      "block w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variantClass = variantClasses[currentVariant];
    const sizeClass = sizeClasses[textareaSize];
    const resizeClass = resizeClasses[resize];

    const textareaClasses = `${baseClasses} ${variantClass} ${sizeClass} ${resizeClass} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          {...props}
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {helperText && !error && (
          <p className="text-gray-500 text-sm mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
