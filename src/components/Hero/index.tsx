import React from "react";
import TypingEffect from "react-typing-effect";
import profile from "../../assets/p.png";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <section
      data-testid="hero-component"
      className="flex flex-col mx-auto md:flex-row justify-center items-center min-h-screen bg-primary"
    >
      {/* Left Section: Profile Image */}
      <div className="relative group mb-8 md:mb-0 md:mr-20">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <img
          src={profile}
          alt="profile"
          data-testid="profile-image"
          className="relative z-10 w-72 h-72 object-cover rounded-full border-4 border-text group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Right Section: Introduction */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-text" data-testid="hero-heading">
          Hi 👋, I'm{" "}
          <TypingEffect
            text={["Faiz", "a Developer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
          />
        </h1>
        <p className="text-lg text-text" data-testid="hero-description">
          A passionate{" "}
          <span className="text-[#ffffff]">frontend developer</span> from
          Indonesia.
        </p>

        {/* Social Media Icons */}
        <div
          className="flex justify-center space-x-4 mt-4 md:ml-2 md:justify-start"
          data-testid="social-icons"
        >
          <a
            href="https://www.instagram.com/empaiss_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-text text-3xl hover:text-pink-500 transition-all duration-300"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faiz-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text text-3xl hover:text-blue-500 transition-all duration-300"
          >
            <SiLinkedin />
          </a>
        </div>
        <Button title="Get in Touch" onClick={handleButtonClick} width="" />
      </div>
    </section>
  );
};

export default Hero;
