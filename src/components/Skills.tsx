
import React from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3",
      "PHP", "Java", "Python", "C", "C++", "XML",
      "Kotlin (Android)","C#"
    ]
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      "React.js", "Tailwind CSS",
      "Laravel","React Native",
      "MySQL","Firebase",
      "RESTful APIs","ASP.NET"
    ]
  },
  {
    title: "UI/UX & Performance",
    skills: [
      "Responsive Design with Tailwind CSS",
      "Interactive Animations & 3D Effects",
      "Progressive Web Apps (PWA)",
      "Webpack & Vite Optimization",
      "SEO Optimization & Performance Tuning",
      "Accessibility (WCAG) Compliance"
    ]
  },
  {
    title: "Soft Skills & Methodologies",
    skills: [
      "Problem Solving & Critical Thinking",
      "Agile & Scrum Methodologies",
      "Git Version Control & CI/CD",
      "Team Leadership & Effective Communication",
      "Time Management & Workflow Optimization",
      "Technical Documentation & Knowledge Transfer"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="numbered-heading">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="glass-card p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-semibold text-slate-light text-xl mb-4">{category.title}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
