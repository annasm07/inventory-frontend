import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders inventory app", () => {
  render(<App />);
  const titleElement = screen.getByText(/Pulpo Con Inventory/i);
  expect(titleElement).toBeInTheDocument();
});
