
import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="text-center py-32">
      <h2 className="font-mono text-highlight text-base mb-4">04. What's Next?</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-light mb-5">Get In Touch</h2>
      
      <p className="max-w-md mx-auto text-slate mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a 
        href="mailto:zaynounjamal77@gmail.com" 
        className="inline-block border-2 border-highlight rounded px-8 py-4 text-highlight font-mono text-base hover:bg-highlight/10 transition-colors"
      >
        Say Hello
      </a>
      
      <div className="flex justify-center gap-8 mt-16">
        <a href="mailto:zaynounjamal77@gmail.com" aria-label="Email" className="text-slate hover:text-highlight transition-colors">
          <Mail size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-slate hover:text-highlight transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" aria-label="GitHub" className="text-slate hover:text-highlight transition-colors">
          <Github size={24} />
        </a>
        <a href="#" aria-label="Resume" className="text-slate hover:text-highlight transition-colors">
          <FileText size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
