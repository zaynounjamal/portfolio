
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            Hello! I'm Zaynoun, a full-stack developer with a passion for creating powerful, elegant digital solutions. Currently in my final year pursuing a Computer Science degree at the Lebanese University, I combine academic knowledge with hands-on experience in modern web and mobile development.
          </p>
          
          <p>
            My journey began with a curiosity about how digital products are built, which evolved into expertise across the entire development stack. I specialize in crafting responsive web applications with React.js and Next.js, building robust backends with Laravel and Node.js, and developing intuitive mobile experiences with React Native and Kotlin.
          </p>
          
          <p>
            What sets me apart is my holistic approach to development—I don't just write code; I architect solutions that balance performance, aesthetics, and user experience. I'm particularly interested in leveraging AI technologies to create smarter applications that solve real-world problems efficiently.
          </p>
          
          <p>
            When I'm not coding, I'm continuously expanding my knowledge through research, contributing to open-source projects, and mentoring aspiring developers. I'm driven by the belief that great software should be both powerful and accessible.
          </p>
        </div>
        
        <div className="relative max-w-[300px] mx-auto md:mx-0">
          <div className="relative z-10">
            <div className="rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Zaynoun Jamal" 
                className="grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto" 
              />
            </div>
            <div className="absolute -inset-1.5 border-2 border-highlight rounded z-[-1]" style={{ transform: 'translate(15px, 15px)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
