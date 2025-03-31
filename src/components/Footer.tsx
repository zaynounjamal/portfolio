
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-slate">
      <p className="mb-2">
        Designed & Built by Zaynoun Jamal
      </p>
      <p className="text-xs text-slate/70">
        © {new Date().getFullYear()} | Built with React.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
