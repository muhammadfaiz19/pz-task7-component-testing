import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of this project.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of this project.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of this project.",
      link: "#",
    },
    {
      title: "Project Four",
      description: "A brief description of this project.",
      link: "#",
    },
    {
      title: "Project Five",
      description: "A brief description of this project.",
      link: "#",
    },
    {
      title: "Project Six",
      description: "A brief description of this project.",
      link: "#",
    },
  ];

  return (
    <section
      data-testid="projects-component"
      id="projects"
      className="bg-primary flex min-h-screen items-center justify-center text-text py-12"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div
          role="grid" 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:text-blue-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
