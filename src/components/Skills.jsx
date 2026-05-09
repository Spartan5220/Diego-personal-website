import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaDatabase, FaCode, FaMicrochip, FaChartLine, FaBrain, 
  FaHtml5, FaLaptopCode, FaUsers, FaSync, FaCheckSquare 
} from 'react-icons/fa';
import { 
  SiPython, SiCplusplus, SiC, SiGo, SiJavascript, SiPostgresql, 
  SiPandas, SiNumpy, SiReact, SiNextdotjs, SiFastapi, SiFlask, 
  SiRedux, SiGitlab, SiGithub, SiDocker, SiSalesforce
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

const skillsData = {
  "Programming Languages": [
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'Java', icon: <FaJava className="text-[#5382a1]" /> },
    { name: 'Apex', icon: <SiSalesforce className="text-[#00A1E0]" /> },
    { name: 'MATLAB', icon: <FaCode className="text-[#e16737]" /> },
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
    { name: 'Go', icon: <SiGo className="text-[#00ADD8]" /> },
    { name: 'Verilog', icon: <FaMicrochip className="text-slate-400" /> },
    { name: 'Javascript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Assembly', icon: <FaMicrochip className="text-slate-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" /> },
    { name: 'SOQL', icon: <FaDatabase className="text-[#00A1E0]" /> },
  ],
  "Databases & Data Science": [
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'PGVector', icon: <FaDatabase className="text-purple-400" /> },
    { name: 'SQLAlchemy', icon: <FaCode className="text-[#D71F00]" /> },
    { name: 'Pandas', icon: <SiPandas className="text-[#150458]" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-[#013243]" /> },
    { name: 'LightGBM', icon: <FaBrain className="text-green-500" /> },
    { name: 'Optuna', icon: <FaBrain className="text-blue-500" /> },
    { name: 'Prophet', icon: <FaChartLine className="text-indigo-500" /> },
  ],
  "Frameworks & Web": [
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" /> },
    { name: 'Flask', icon: <SiFlask className="text-white" /> },
    { name: 'HTML/CSS', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'ShadCN', icon: <FaLaptopCode className="text-slate-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
  ],
  "Developer Tools & Methodologies": [
    { name: 'Git/Gitlab', icon: <SiGitlab className="text-[#FCA121]" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Agile framework', icon: <FaSync className="text-brand-500" /> },
    { name: 'SCRUM', icon: <FaUsers className="text-purple-500" /> },
    { name: 'Azure DevOps', icon: <VscAzureDevops className="text-[#0078D7]" /> },
    { name: 'JUnit', icon: <FaCheckSquare className="text-green-500" /> },
  ]
};

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
            My toolkit for building robust, scalable, and beautiful applications.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-8 text-slate-800 text-center uppercase tracking-wider">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
