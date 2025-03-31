
import React, { useState } from 'react';

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: [
      "Developed and deployed 5+ custom web applications using React.js and Laravel, resulting in an average 30% increase in client business efficiency.",
      "Implemented AI-powered chatbot solutions that reduced customer service response times by 40% while maintaining high satisfaction rates.",
      "Created responsive, accessible interfaces with Tailwind CSS and modern animation techniques, improving mobile user engagement by 25%.",
      "Optimized application performance through code splitting and lazy loading, achieving a 40% improvement in load times and higher SEO rankings."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Royal Cedar Scents",
    date: "2023 - Present",
    description: [
      "Architected and built a comprehensive e-commerce platform handling 1000+ daily users and processing 200+ transactions per day.",
      "Integrated secure payment processing with Stripe and PayPal, implementing robust error handling and fraud prevention measures.",
      "Designed and implemented a custom CMS for product management, enabling non-technical staff to update inventory and manage orders.",
      "Performed A/B testing on UI components, resulting in a 15% increase in conversion rates and 20% reduction in cart abandonment."
    ]
  },
  {
    title: "Mobile App Developer",
    company: "B-Back Restaurant App",
    date: "2023",
    description: [
      "Developed a React Native application that streamlined ordering processes, reducing order completion time by 35%.",
      "Built a scalable Laravel backend with RESTful API architecture, capable of handling 500+ concurrent users.",
      "Implemented real-time order tracking using WebSockets, improving customer satisfaction scores by 28%.",
      "Optimized app performance through code profiling and refactoring, resulting in 60% faster startup time and smoother navigation."
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
