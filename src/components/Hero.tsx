
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-0">
      <div className="animate-fade-in animation-delay-200">
        <h1 className="font-mono text-highlight text-base mb-5">Hi, my name is</h1>
      </div>
      <div className="animate-fade-in animation-delay-400">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-light mb-4">Zaynoun Jamal.</h2>
      </div>
      <div className="animate-fade-in animation-delay-600">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate mb-8">I build things for the web.</h3>
      </div>
      <div className="animate-fade-in animation-delay-800 max-w-xl">
        <p className="text-lg text-slate mb-12">
          I'm a full-stack developer and computer science senior specializing in building exceptional digital experiences. Currently, I'm focused on crafting scalable, AI-powered web and mobile applications with modern technologies.
        </p>
      </div>
      <div className="animate-fade-in animation-delay-800">
        <a 
          href="#projects" 
          className="inline-block border border-highlight rounded px-7 py-4 text-highlight font-mono text-sm hover:bg-highlight/10 transition-colors"
        >
          Check out my work
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="text-highlight" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
