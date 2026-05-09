import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import PhysicsSandbox from './PhysicsSandbox';

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden min-h-[300px] flex flex-col justify-end">
      {/* Physics Sandbox Background */}
      <PhysicsSandbox />
      
      {/* Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 pointer-events-none">
        <div className="text-center md:text-left pointer-events-auto bg-white/80 dark:bg-slate-950/80 p-4 rounded-2xl backdrop-blur-sm border border-transparent dark:border-white/5">
          <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
            Diego De Guzman<span className="text-brand-500">.</span>
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-brand-500 text-xs mt-2 font-semibold">Try throwing the objects around!</p>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <a href="https://www.linkedin.com/in/deguzmand/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-brand-400 transition-colors border border-transparent dark:border-white/5 backdrop-blur-sm">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Spartan5220" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-purple-400 transition-colors border border-transparent dark:border-white/5 backdrop-blur-sm">
            <FaGithub size={20} />
          </a>
          <a href="mailto:deguzmand@example.com" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-pink-400 transition-colors border border-transparent dark:border-white/5 backdrop-blur-sm">
            <FaEnvelope size={20} />
          </a>
          <a href="https://instagram.com/diego.deguzzy" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-orange-400 transition-colors border border-transparent dark:border-white/5 backdrop-blur-sm">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
