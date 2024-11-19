import React from "react";

interface ButtonProps {
  title: string;
  type?: string;
  width?: string; 
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      className={`${width ? width : ""} mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-text rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
    >
      {title}
    </button>
  );
};

export default Button;
