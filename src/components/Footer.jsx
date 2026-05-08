import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-black text-white tracking-tighter mb-2">
            Diego De Guzman<span className="text-brand-500">.</span>
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/deguzmand/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Spartan5220" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="mailto:deguzmand@example.com" className="text-slate-400 hover:text-pink-400 transition-colors">
            <FaEnvelope size={20} />
          </a>
          <a href="https://instagram.com/diego.deguzzy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
