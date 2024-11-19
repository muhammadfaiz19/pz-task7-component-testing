import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-text text-xl md:text-2xl font-bold">Muhammad Faiz</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-text text-lg font-medium">
          <li className="hover:text-white transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary">
          <ul className="flex flex-col space-y-4 p-4 text-text text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-white transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
                onClick={toggleMenu}
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
