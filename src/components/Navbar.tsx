
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Skills', url: '#skills' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-dark/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="text-highlight font-bold font-mono text-xl">ZJ</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.url}
              className="nav-link"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <span className="text-highlight">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-highlight rounded px-4 py-2 text-highlight font-mono text-sm hover:bg-highlight/10 transition-colors"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-highlight"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-navy-dark/95 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.url}
              className="text-slate-light hover:text-highlight font-mono text-lg my-3"
              onClick={toggleMenu}
            >
              <span className="text-highlight">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 border border-highlight rounded px-5 py-2 text-highlight font-mono"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
