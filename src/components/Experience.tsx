
import React, { useState } from 'react';

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: [
      "Provided programming, web development, app development, social media services, editing, and graphic design.",
      "Delivered high-quality, customized solutions for clients, ensuring satisfaction and business growth.",
      "Built websites and applications using technologies like Laravel, PHP, MySQL, React.js, Tailwind CSS, and Java.",
      "Optimized application performance through code splitting and lazy loading, achieving a 40% improvement in load times and higher SEO rankings.",
      "Enhanced skills in AI, full-stack development, and emerging technologies to stay competitive."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Royal Cedar Scents",
    date: "2025",
    description: [
      "Built a fully functional e-commerce website for Royal Cedar Scents, focusing on seamless user experience.",
      "Developed the platform using Laravel, PHP, MySQL, and Tailwind CSS for a responsive and modern design.",
      "Integrated features for product listings, secure checkout, order tracking, and inventory management.",
      "Implemented secure payment gateways and robust authentication to protect user data.",
      "Ensured fast loading speeds, mobile responsiveness, and an intuitive design for better customer engagement."
    ]
  },
  {
    title: "Mobile App Developer",
    company: "B-Back Restaurant App",
    date: "2025",
    description: [
      "Developed a mobile application for B.Back, a restaurant in Choueifat, to enhance customer experience and streamline operations.",
      "Built the app using Java and XML for the frontend, with PHP and MySQL for backend functionality.",
      "Implemented features for online food ordering, table reservations, and real-time menu updates.",
      "Integrated a secure login system and payment gateway for seamless transactions.",
      "Designed an intuitive and responsive interface for easy navigation and an enhanced dining experience."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="experience">
      <h2 className="numbered-heading">What I've Worked</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:min-w-[140px] border-b md:border-b-0 md:border-l border-slate/20">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap ${
                activeTab === index 
                  ? 'text-highlight bg-navy-light md:border-highlight md:border-l-2 md:-ml-[2px]' 
                  : 'text-slate hover:text-slate-light hover:bg-navy-light/30'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
        
        <div className="p-1">
          <div className="experience-date">{experiences[activeTab].date}</div>
          <div className="experience-title">{experiences[activeTab].title}</div>
          <div className="experience-company">{experiences[activeTab].company}</div>
          
          <ul className="experience-list">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
