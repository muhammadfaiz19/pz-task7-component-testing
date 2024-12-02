import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-text text-xl md:text-2xl font-bold">
          <Link to="/" data-testid="navbar-brand">
            Muhammad Faiz
          </Link>
        </h1>
        <ul className="hidden md:flex space-x-6 text-text text-lg font-medium">
          <li>
            <Link
              to="/"
              className="relative transition duration-300 text-white border-b-2 border-white"
              data-testid="desktop-menu-home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative transition duration-300 text-text hover:text-white hover:bg-secondary rounded-lg px-2 py-1"
              data-testid="desktop-menu-about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative transition duration-300 text-text hover:text-white hover:bg-secondary rounded-lg px-2 py-1"
              data-testid="desktop-menu-contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-text text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          data-testid="menu-toggle-button"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-40"
          data-testid="mobile-menu"
        >
          <ul className="flex flex-col space-y-4 text-text text-lg font-medium w-full p-6">
            <li className="w-full">
              <Link
                to="/"
                onClick={closeMobileMenu} 
                className="block text-center py-3 rounded-lg transition duration-300 bg-white text-primary"
                data-testid="mobile-menu-home"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/about"
                onClick={closeMobileMenu} 
                className="block text-center py-3 rounded-lg transition duration-300 hover:bg-white hover:text-primary"
                data-testid="mobile-menu-about"
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/contact"
                onClick={closeMobileMenu} 
                className="block text-center py-3 rounded-lg transition duration-300 hover:bg-white hover:text-primary"
                data-testid="mobile-menu-contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
