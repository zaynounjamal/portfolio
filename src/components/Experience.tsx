
import React, { useState } from 'react';

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: [
      "Built high-performance web & mobile apps using React.js, Laravel, Kotlin, and MySQL.",
      "Integrated AI-powered automation and chatbot solutions for business efficiency.",
      "Designed modern, responsive UI/UX with Tailwind CSS and React animations.",
      "Enhanced SEO & performance, boosting search rankings and user engagement."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Royal Cedar Scents",
    date: "2023 - Present",
    description: [
      "Developed a full-stack e-commerce platform with React.js (frontend) and Laravel (backend).",
      "Integrated Stripe/PayPal payments, shopping cart, and secure authentication.",
      "Designed custom product listings, vendor dashboards, and dynamic UI components.",
      "Optimized SEO, mobile performance, and customer retention features."
    ]
  },
  {
    title: "Mobile App Developer",
    company: "B-Back Restaurant App",
    date: "2023",
    description: [
      "Built a React Native mobile app for menu browsing & online ordering.",
      "Developed a backend with Laravel & MySQL, featuring authentication & order tracking.",
      "Implemented real-time order processing and secure transactions.",
      "Optimized app performance for smooth navigation & fast loading speeds."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="experience">
      <h2 className="numbered-heading">Where I've Worked</h2>
      
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
