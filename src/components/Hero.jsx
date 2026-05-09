import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaInstagram } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import profilePic from '../assets/profile.png';
import CarModel from './canvas/CarModel';

const Hero = () => {
  const greeting = "Hello World, I am";
  const name = "Diego de Guzman";

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden bg-slate-950 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-50">
        <img 
          src={profilePic} 
          alt="Diego" 
          className="w-full h-full object-cover object-top md:object-center filter brightness-[0.6]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/20"></div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000"></div>

      {/* 3D Car Canvas */}
      <div className="absolute inset-0 z-[5]">
        <Canvas camera={{ position: [0, 1.5, 7], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <CarModel position={[0, 0.5, 0]} />
            <ContactShadows position={[0, 0.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
          </Suspense>
        </Canvas>
      </div>

      <div className="z-10 max-w-4xl w-full text-center mt-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 flex flex-col justify-center items-center gap-4 drop-shadow-2xl text-center leading-tight">
            <span className="flex justify-center flex-wrap">
              {greeting.split('').map((char, index) => (
                <motion.span
                  key={`greeting-${index}`}
                  initial={{ opacity: 0, display: 'none' }}
                  animate={{ opacity: 1, display: 'inline-block' }}
                  transition={{ duration: 0.05, delay: 0.5 + index * 0.1 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <span className="text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)] flex justify-center flex-wrap">
              {name.split('').map((char, index) => (
                <motion.span
                  key={`name-${index}`}
                  initial={{ opacity: 0, display: 'none' }}
                  animate={{ opacity: 1, display: 'inline-block' }}
                  transition={{ duration: 0.05, delay: 0.5 + (greeting.length * 0.1) + index * 0.1 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a software developer and a <span className="font-semibold text-brand-400">summa cum laude</span> graduate in Computer Systems Engineering from ASU's Barrett Honors College. When I'm not coding, you can usually find me traveling or at the gym.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-5 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-widest">Connect with me</p>
          <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/deguzmand/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 hover:bg-brand-600/20 hover:text-brand-400 transition-all duration-300 border border-white/10 hover:border-brand-500/50 backdrop-blur-sm group"
          >
            <FaLinkedin size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/Spartan5220"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm group"
          >
            <FaGithub size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:diegodeguzman5220@gmail.com"
            className="p-4 rounded-full bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 transition-all duration-300 border border-white/10 hover:border-pink-500/50 backdrop-blur-sm group"
          >
            <FaEnvelope size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://instagram.com/diego.deguzzy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 hover:bg-orange-600/20 hover:text-orange-400 transition-all duration-300 border border-white/10 hover:border-orange-500/50 backdrop-blur-sm group"
          >
            <FaInstagram size={28} className="group-hover:scale-110 transition-transform" />
          </a>
          </div>
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
