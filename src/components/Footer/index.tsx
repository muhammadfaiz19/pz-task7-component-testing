import React from 'react';
import { SiInstagram, SiLinkedin } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-text py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Muhammad Faiz
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/empaiss_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text text-2xl hover:text-pink-500 transition duration-300"
            aria-label="Instagram"  
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faiz-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text text-2xl hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"  
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
