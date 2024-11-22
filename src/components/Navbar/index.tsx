import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-text text-xl md:text-2xl font-bold">
          <Link to="/">Muhammad Faiz</Link>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-text text-lg font-medium">
          {["/", "/about", "/contact"].map((path) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative transition duration-300 ${
                  location.pathname === path
                    ? "text-white border-b-2 border-white" 
                    : "text-text hover:text-white hover:bg-secondary rounded-lg px-2 py-1"
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
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
        <div className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-40">
          <ul className="flex flex-col space-y-4 text-text text-lg font-medium w-full p-6">
            {["/", "/about", "/contact"].map((path) => (
              <li className="w-full" key={path}>
                <Link
                  to={path}
                  className={`block text-center py-3 rounded-lg transition duration-300 ${
                    location.pathname === path
                      ? "bg-white text-primary"
                      : "hover:bg-white hover:text-primary"
                  }`}
                  onClick={toggleMenu}
                >
                  {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;