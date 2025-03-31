
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            Hello! I'm Zaynoun, a passionate Full-Stack Developer and Computer Science senior at the Lebanese University. I specialize in building exceptional digital experiences that combine powerful functionality with elegant design.
          </p>
          
          <p>
            My journey in tech started with a fascination for creating things that live on the internet. This passion has grown into expertise in crafting scalable, AI-powered web and mobile applications using modern technologies.
          </p>
          
          <p>
            With a focus on building high-performance, user-friendly, and visually engaging digital solutions, I strive to solve complex problems through clean, efficient code and intuitive design.
          </p>
          
          <p>
            As I approach the completion of my Computer Science degree, I'm eager to apply my skills and knowledge to create innovative solutions that make a positive impact.
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
