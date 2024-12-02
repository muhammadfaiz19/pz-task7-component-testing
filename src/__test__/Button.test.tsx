import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

describe("Button Component", () => {
  const mockOnClick = jest.fn();
  const defaultProps = {
    title: "Click me",
    onClick: mockOnClick,
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders with the correct title", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: /Click me/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom width when provided", () => {
    render(<Button {...defaultProps} width="w-64" />);
    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toHaveClass("w-64");
  });
});
