
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Elegance & Co. E-Commerce",
    description: "A high-performance online shopping experience built with React.js and Laravel, featuring real-time inventory updates, personalized product recommendations using machine learning algorithms, and a streamlined checkout process that increased conversions by 24%.",
    technologies: ["Laravel", "Tailwind CSS", "MySQL", "PHP"],
    github: "https://github.com/zaynounjamal/elegance-co.git",
    external: "https://www.linkedin.com/posts/zaynounjamal_laravel-webdevelopment-ecommerce-activity-7308134557260603393-mK8g?utm_medium=ios_app&rcm=ACoAAE8bCV0BD17RP9Nk8ufI6hwxX_XACg994TM&utm_source=social_share_send&utm_campaign=copy_link",
    image: "./elegance.png"
   }, {
    title: "Royal Cedar Scents E-Commerce",
    description: "The Royal Cedar Scents website is a sleek e-commerce platform for luxury fragrances, offering seamless browsing, secure checkout, and efficient order management. Built with Laravel, PHP, MySQL, and Tailwind CSS, it ensures a smooth shopping experience.",
    technologies: ["Laravel", "Tailwind CSS", "MySQL", "PHP"],
    github: "https://github.com/zaynounjamal",
    external: "https://www.linkedin.com/posts/zaynounjamal_laraveldocument-activity-7309176639639158784-T7d3?utm_medium=ios_app&rcm=ACoAAE8bCV0BD17RP9Nk8ufI6hwxX_XACg994TM&utm_source=social_share_send&utm_campaign=copy_link",
    image: "./royal.png"
  },
  {
    title: "B-Back Restaurant Mobile Application",
    description: "The B.Back Restaurant App allows customers to browse the menu, place orders, and make reservations with a seamless, user-friendly experience. Built with Java, XML, PHP, and MySQL, it ensures smooth transactions and real-time updates.",
    technologies: ["Java", "XML", "PHP", "MYSQL"],
    github: "https://github.com/zaynounjamal/bback_restaurant_app.git",
    external: "https://www.linkedin.com/posts/zaynounjamal_restaurantapp-mobileappdevelopment-php-ugcPost-7297594423150825472-CkYJ?utm_medium=ios_app&rcm=ACoAAE8bCV0BD17RP9Nk8ufI6hwxX_XACg994TM&utm_source=social_share_send&utm_campaign=copy_link",
    image: "./bback.png"
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
        <a href="https://github.com/zaynounjamal" target="_blank" rel="noopener noreferrer" className="inline-block border border-highlight rounded px-7 py-4 text-highlight font-mono text-sm hover:bg-highlight/10 transition-colors">
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
