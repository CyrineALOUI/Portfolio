import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "The Game",
      description: "An educational web-based Serious Game to raise awareness about sensitive data protection for Data Protection Officers (DPOs) in the banking sector.",
      technologies: ["Java", "Spring boot", "Spring Security", "ReactJS", "MySQL"]
    },
    {
      title: "Project Management App",
      description: "A Spring Boot + React application for managing projects, tasks, teams, and deadlines.",
      technologies: ["Spring Boot", "React", "MySQL"]
    },
    {
      title: "Flower Shop Website",
      description: "An e-commerce platform to sell flowers online, with cart, checkout, and user authentication.",
      technologies: ["Spring Boot", "Angular", "Stripe API"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
            <button className="details-button"> View Details </button>
          </div>
        ))}
      </div>
    </section>
  );
};
