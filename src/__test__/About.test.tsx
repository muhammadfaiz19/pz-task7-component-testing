import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import "@testing-library/jest-dom"; 

describe("About Page", () => {
  it("renders About Me heading", () => {
    render(<About />);
    // Mengecek apakah judul "About Me" ada di halaman
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  it("renders profile image with correct alt text", () => {
    render(<About />);
    const profileImage = screen.getByAltText(/profile/i);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("alt", "Profile");
  });

  it("renders Muhammad Faiz text", () => {
    render(<About />);
    // Mengecek apakah teks "Muhammad Faiz" muncul dalam paragraf
    expect(screen.getByText(/Muhammad Faiz/i)).toBeInTheDocument();
  });

  it("renders Universitas Muhammadiyah Cirebon text", () => {
    render(<About />);
    // Mengecek apakah teks Universitas Muhammadiyah Cirebon muncul dalam paragraf
    expect(screen.getByText(/Universitas Muhammadiyah Cirebon/i)).toBeInTheDocument();
  });

  it("renders web development passion text", () => {
    render(<About />);
    // Mengecek apakah teks tentang passion di web development muncul dalam paragraf
    expect(screen.getByText(/passionate about web development/i)).toBeInTheDocument();
  });
});
