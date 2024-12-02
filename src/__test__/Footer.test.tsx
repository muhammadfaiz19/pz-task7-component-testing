import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("renders the footer text with the current year", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(
      screen.getByText(`© ${currentYear} Muhammad Faiz`)
    ).toBeInTheDocument();
  });

  it("renders Instagram link with correct href", () => {
    render(<Footer />);
    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/empaiss_"
    );
  });

  it("renders LinkedIn link with correct href", () => {
    render(<Footer />);
    const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/muhammad-faiz-"
    );
  });

  it("applies the correct styling classes", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-secondary text-text py-6");
  });
});
