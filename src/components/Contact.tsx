
import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="text-center py-32">
      <h2 className="font-mono text-highlight text-base mb-4">04. What's Next?</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-light mb-5">Get In Touch</h2>
      
      <p className="max-w-md mx-auto text-slate mb-12">
        I'm currently exploring new opportunities where I can apply my full-stack development skills to create impactful digital solutions. Whether you have a project in mind, a position to fill, or just want to connect, I'd love to hear from you!
      </p>
      
      <a 
        href="mailto:zaynounjamal77@gmail.com" 
        className="inline-block border-2 border-highlight rounded px-8 py-4 text-highlight font-mono text-base hover:bg-highlight/10 transition-colors"
      >
        Say Hello
      </a>
      
      <div className="flex justify-center gap-8 mt-16">
        <a href="mailto:zaynounjamal77@gmail.com" aria-label="Email" className="text-slate hover:text-highlight transition-colors" title="Email">
          <Mail size={24} />
        </a>
        <a href="https://www.linkedin.com/in/zaynounjamal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" className="text-slate hover:text-highlight transition-colors" title="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/zaynounjamal" aria-label="GitHub" className="text-slate hover:text-highlight transition-colors" title="GitHub">
          <Github size={24} />
        </a>
        <a href="/resume.pdf" aria-label="Resume" className="text-slate hover:text-highlight transition-colors" title="Download Resume">
          <FileText size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
