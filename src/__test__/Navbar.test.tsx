import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Dibutuhkan untuk Link
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it("renders the navbar and checks for desktop links", () => {
    renderWithRouter(<Navbar />);

    // Pastikan elemen desktop menu muncul
    const desktopHome = screen.getByTestId("desktop-menu-home");
    const desktopAbout = screen.getByTestId("desktop-menu-about");
    const desktopContact = screen.getByTestId("desktop-menu-contact");

    expect(desktopHome).toBeInTheDocument();
    expect(desktopAbout).toBeInTheDocument();
    expect(desktopContact).toBeInTheDocument();
  });

  it("toggles mobile menu", () => {
    renderWithRouter(<Navbar />);

    // Klik tombol toggle untuk membuka menu mobile
    const toggleButton = screen.getByTestId("menu-toggle-button");
    fireEvent.click(toggleButton);

    // Periksa bahwa menu mobile muncul
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();

    // Periksa elemen dalam menu mobile
    const mobileMenuHome = screen.getByTestId("mobile-menu-home");
    const mobileMenuAbout = screen.getByTestId("mobile-menu-about");
    const mobileMenuContact = screen.getByTestId("mobile-menu-contact");

    expect(mobileMenuHome).toBeInTheDocument();
    expect(mobileMenuAbout).toBeInTheDocument();
    expect(mobileMenuContact).toBeInTheDocument();
  });

  it("closes the mobile menu on toggle button click", () => {
    renderWithRouter(<Navbar />);

    // Klik tombol toggle untuk membuka menu mobile
    const toggleButton = screen.getByTestId("menu-toggle-button");
    fireEvent.click(toggleButton);

    // Pastikan menu mobile muncul
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();

    // Klik tombol toggle lagi untuk menutup menu mobile
    fireEvent.click(toggleButton);

    // Pastikan menu mobile tidak ada lagi
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });
});
