import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden bg-slate-950 text-white">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000"></div>

      <div className="z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Diego De Guzman</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Systems Engineering Senior at ASU (Barrett Honors College) & Software Engineering Intern.
            Passionate about building beautiful, highly functional frontend experiences.
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://www.linkedin.com/in/deguzmand/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 hover:bg-brand-600/20 hover:text-brand-400 transition-all duration-300 border border-white/10 hover:border-brand-500/50 backdrop-blur-sm group"
          >
            <FaLinkedin size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://github.com/deguzmand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm group"
          >
            <FaGithub size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:deguzmand@example.com" 
            className="p-4 rounded-full bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 transition-all duration-300 border border-white/10 hover:border-pink-500/50 backdrop-blur-sm group"
          >
            <FaEnvelope size={28} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
      >
        <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
          <FaArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
