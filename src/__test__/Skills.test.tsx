import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";

describe("Skills Component", () => {
  test("should render the correct number of skills", () => {
    render(<Skills />);
    
    // Check that all skills are rendered
    const skillItems = screen.getAllByRole("listitem");
    expect(skillItems).toHaveLength(8); 
  });

  test("should display each skill name", () => {
    render(<Skills />);
    
    // Check that each skill name is displayed
    const skillNames = [
      "Python", "PHP", "JavaScript", "TypeScript", "React", "Next.js", "MySQL", "MongoDB"
    ];
    skillNames.forEach((name) => {
      const skillElement = screen.getByText(name);
      expect(skillElement).toBeInTheDocument();
    });
  });

  test("should render grid layout", () => {
    render(<Skills />);
    
    // Check that the grid layout exists
    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument();
  });
});
