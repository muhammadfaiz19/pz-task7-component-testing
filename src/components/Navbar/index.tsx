import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; 

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-text text-xl md:text-2xl font-bold">
          <a href="/" data-testid="navbar-brand">
            Muhammad Faiz
          </a>
        </h1>
        <ul className="hidden md:flex space-x-6 text-text text-lg font-medium">
          <li>
            <a
              className="relative transition duration-300 text-white border-b-2 border-white"
              href="/"
              data-testid="desktop-menu-home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="relative transition duration-300 text-text hover:text-white hover:bg-secondary rounded-lg px-2 py-1"
              href="/about"
              data-testid="desktop-menu-about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="relative transition duration-300 text-text hover:text-white hover:bg-secondary rounded-lg px-2 py-1"
              href="/contact"
              data-testid="desktop-menu-contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-text text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          data-testid="menu-toggle-button"
        >
          <FaBars /> 
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-40"
          data-testid="mobile-menu"
        >
          <ul className="flex flex-col space-y-4 text-text text-lg font-medium w-full p-6">
            <li className="w-full">
              <a
                className="block text-center py-3 rounded-lg transition duration-300 bg-white text-primary"
                href="/"
                data-testid="mobile-menu-home"
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                className="block text-center py-3 rounded-lg transition duration-300 hover:bg-white hover:text-primary"
                href="/about"
                data-testid="mobile-menu-about"
              >
                About
              </a>
            </li>
            <li className="w-full">
              <a
                className="block text-center py-3 rounded-lg transition duration-300 hover:bg-white hover:text-primary"
                href="/contact"
                data-testid="mobile-menu-contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
