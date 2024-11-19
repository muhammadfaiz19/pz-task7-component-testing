// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">My Brand</h2>
            <p className="text-sm text-gray-400">Your tagline here.</p>
          </div>

          {/* Navigasi */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="/" className="text-gray-400 hover:text-white">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white">About</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
            <a href="/services" className="text-gray-400 hover:text-white">Services</a>
          </div>

          {/* Info Kontak */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">Email: info@mybrand.com</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 My Brand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
