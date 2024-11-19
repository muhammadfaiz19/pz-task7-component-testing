import profile from "../../assets/L.png";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary min-h-screen mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-text mb-8">
        About Me
      </h1>

      {/* Profile Picture */}
      <div className="flex justify-center mb-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <img
            src={profile}
            alt="Profile"
            className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-white group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm sm:text-base text-text">
          Hi, I’m <span className="font-semibold">Muhammad Faiz</span>, a student at{" "}
          <span className="font-semibold">Universitas Muhammadiyah Cirebon</span>. 
          I am passionate about web development and currently focusing on mastering the MERN stack.
        </p>
      </div>
    </div>
  );
};

export default About;
