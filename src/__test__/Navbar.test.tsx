import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  it("toggles mobile menu", () => {
    render(<Navbar />);

    // Simulasikan klik pada tombol toggle
    const toggleButton = screen.getByTestId("menu-toggle-button");
    fireEvent.click(toggleButton);

    // Pastikan menu mobile muncul
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();

    // Periksa elemen dalam menu mobile
    const mobileMenuHome = screen.getByTestId("mobile-menu-home");
    expect(mobileMenuHome).toBeInTheDocument();
  });
});
