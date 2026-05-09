import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Travel', href: '#travel' },
    { name: 'Hobbies', href: '#hobbies' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
          D<span className="text-brand-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center bg-slate-200/50 dark:bg-white/5 px-6 py-2 rounded-full border border-slate-300/50 dark:border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-colors ml-2 border-l border-slate-300 dark:border-slate-700 pl-4"
          >
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4 text-slate-800 dark:text-white bg-slate-200/50 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-300/50 dark:border-white/10 backdrop-blur-md">
          <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300">
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
          <div className="w-px h-5 bg-slate-300 dark:bg-slate-700"></div>
          <button 
            className="text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
