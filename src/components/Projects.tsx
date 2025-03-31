
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Elegance & Co.",
    description: "A feature-rich e-commerce platform built with React.js and Laravel, offering a seamless shopping experience with real-time notifications, advanced search, and secure payment processing.",
    technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "Stripe API", "Redis"],
    github: "#",
    external: "#",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Royal Cedar Scents",
    description: "A full-stack e-commerce solution for a luxury fragrance brand, featuring custom product listings, vendor dashboards, and dynamic UI components with a focus on performance and SEO.",
    technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "PayPal API", "Firebase"],
    github: "#",
    external: "#",
    image: "https://images.unsplash.com/photo-1556228578-8d89a59269d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "B-Back Restaurant App",
    description: "A mobile application for restaurant menu browsing and online ordering, featuring real-time order tracking, secure payment processing, and an intuitive user interface.",
    technologies: ["React Native", "Laravel", "MySQL", "Firebase", "Stripe"],
    github: "#",
    external: "#",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-content">
              <div className="project-overline font-mono text-highlight text-xs mb-2">Featured Project</div>
              <h3 className="project-title text-slate-light text-2xl font-semibold mb-5">{project.title}</h3>
              
              <div className="project-description glass-card p-6 mb-4 text-slate z-10">
                <p>{project.description}</p>
              </div>
              
              <ul className="project-tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              
              <div className="project-links flex gap-4 mt-4">
                <a href={project.github} aria-label="GitHub Repository">
                  <Github size={20} />
                </a>
                <a href={project.external} aria-label="External Link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="project-image mt-6 md:mt-0">
              <a href={project.external} className="block rounded overflow-hidden relative">
                <div className="absolute inset-0 bg-navy hover:bg-transparent opacity-60 hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto rounded object-cover"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-block border border-highlight rounded px-7 py-4 text-highlight font-mono text-sm hover:bg-highlight/10 transition-colors">
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
