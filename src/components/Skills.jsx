import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { DiPhotoshop } from 'react-icons/di';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiBootstrap, 
  SiFramer, SiVite, SiDotnet, SiNodedotjs, SiExpress, SiPython, SiFirebase, 
  SiSupabase, SiMysql, SiGithub, SiBitbucket, SiFigma,
  SiBlazor
} from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: 'CSS', icon: <SiCss className="text-[#1572B6]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
  { name: 'Java', icon: <FaJava className="text-[#5382a1]" /> },
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
  { name: 'Blazor', icon: <SiBlazor className="text-[#5C2D91]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-white" /> },
  { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
  { name: '.NET', icon: <SiDotnet className="text-[#512BD4]" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: 'Express', icon: <SiExpress className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  { name: 'Bitbucket', icon: <SiBitbucket className="text-[#0052CC]" /> },
  { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
  { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: 'Photoshop', icon: <DiPhotoshop className="text-[#31A8FF]" /> },
];

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-24 bg-white text-slate-900 relative"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Technical Skills</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            My toolkit for building robust, scalable, and beautiful fullstack applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 bg-slate-950 text-white rounded-full shadow-lg shadow-slate-900/20 border border-slate-800 hover:border-brand-500 transition-colors"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="font-semibold text-sm tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
