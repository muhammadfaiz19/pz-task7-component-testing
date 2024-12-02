import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "Python", color: "bg-purple-500" },
    { name: "PHP", color: "bg-pink-500" },
    { name: "JavaScript", color: "bg-blue-500" },
    { name: "TypeScript", color: "bg-purple-500" },
    { name: "React", color: "bg-pink-500" },
    { name: "Next.js", color: "bg-blue-500" },
    { name: "MySQL", color: "bg-purple-500" },
    { name: "MongoDB", color: "bg-pink-500" },
  ];

  return (
    <>
      <section  data-testid="skills-component" id="skills" className="bg-secondary flex min-h-screen items-center justify-center text-text py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            role="grid" 
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-transform duration-300 ${skill.color} hover:scale-105`}
                role="listitem"
              >
                <h3 className="text-xl font-semibold text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
