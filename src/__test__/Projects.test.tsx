import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

describe("Projects Component", () => {
  it("should render project section with title 'My Projects'", () => {
    render(<Projects />);

    const section = screen.getByText(/My Projects/i);
    expect(section).toBeInTheDocument();
  });

  it("should render correct number of projects", () => {
    render(<Projects />);

    // Memastikan ada 6 proyek ditampilkan
    const projectItems = screen.getAllByRole("link");
    expect(projectItems).toHaveLength(6);
  });

  it("should render each project with title, description, and link", () => {
    render(<Projects />);

    // Memeriksa apakah setiap proyek memiliki judul, deskripsi, dan tautan
    const projectTitles = screen.getAllByRole("heading", { level: 3 });
    const projectDescriptions = screen.getAllByText(/A brief description of this project./i);
    const projectLinks = screen.getAllByRole("link");

    expect(projectTitles).toHaveLength(6);
    expect(projectDescriptions).toHaveLength(6);
    expect(projectLinks).toHaveLength(6);

    // Memastikan link mengarah ke '#'
    projectLinks.forEach(link => {
      expect(link).toHaveAttribute("href", "#");
    });
  });

  it("should render each project with the correct link text 'View Project'", () => {
    render(<Projects />);

    // Memastikan setiap link memiliki teks 'View Project'
    const linkTexts = screen.getAllByText(/View Project/i);
    expect(linkTexts).toHaveLength(6);
  });

  it("should render the projects in a grid layout", () => {
    render(<Projects />);

    // Memastikan proyek diposisikan dalam grid
    const gridContainer = screen.getByRole("grid");
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass("grid");
  });
});
