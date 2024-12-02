import { render, screen } from "@testing-library/react";
import Home from "../pages/Home"; // Adjust the import according to your file structure

// Mock child components if necessary
jest.mock("../components/Hero", () => () => <div data-testid="hero-component" />);
jest.mock("../components/Skills", () => () => <div data-testid="skills-component" />);
jest.mock("../components/Projects", () => () => <div data-testid="projects-component" />);

describe("Home Page", () => {
  it("renders Hero, Skills, and Projects components", () => {
    render(<Home />);

    // Check if the Hero component is rendered
    expect(screen.getByTestId("hero-component")).toBeInTheDocument();

    // Check if the Skills component is rendered
    expect(screen.getByTestId("skills-component")).toBeInTheDocument();

    // Check if the Projects component is rendered
    expect(screen.getByTestId("projects-component")).toBeInTheDocument();
  });
});
