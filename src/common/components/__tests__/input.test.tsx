import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../../test/utils";
import { Input } from "../input";

describe("Input Component", () => {
  it("renders with label", () => {
    render(<Input label="Test Label" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("renders with required indicator", () => {
    render(<Input label="Test Label" isRequired />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("shows error message", () => {
    render(<Input label="Test Label" error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("shows helper text when no error", () => {
    render(<Input label="Test Label" helperText="Enter your name" />);
    expect(screen.getByText("Enter your name")).toBeInTheDocument();
  });

  it("does not show helper text when there is an error", () => {
    render(
      <Input
        label="Test Label"
        error="This field is required"
        helperText="Enter your name"
      />
    );
    expect(screen.queryByText("Enter your name")).not.toBeInTheDocument();
  });

  it("handles input changes", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Input variant="default" />);
    expect(screen.getByRole("textbox")).toHaveClass("border-gray-300");

    rerender(<Input variant="error" />);
    expect(screen.getByRole("textbox")).toHaveClass("border-red-500");

    rerender(<Input variant="success" />);
    expect(screen.getByRole("textbox")).toHaveClass("border-green-500");
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(<Input inputSize="sm" />);
    expect(screen.getByRole("textbox")).toHaveClass(
      "px-3",
      "py-1.5",
      "text-sm"
    );

    rerender(<Input inputSize="md" />);
    expect(screen.getByRole("textbox")).toHaveClass(
      "px-3",
      "py-2",
      "text-base"
    );

    rerender(<Input inputSize="lg" />);
    expect(screen.getByRole("textbox")).toHaveClass("px-4", "py-3", "text-lg");
  });

  it("renders with left icon", () => {
    const icon = <span data-testid="left-icon">@</span>;
    render(<Input leftIcon={icon} />);

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    const icon = <span data-testid="right-icon">✓</span>;
    render(<Input rightIcon={icon} />);

    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass(
      "disabled:opacity-50",
      "disabled:cursor-not-allowed"
    );
  });

  it("accepts custom className", () => {
    render(<Input className="custom-class" />);

    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);

    expect(ref).toHaveBeenCalled();
  });
});
