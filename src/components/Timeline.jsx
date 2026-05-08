import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import timelineData from '../data/timeline.json';

const iconMap = {
  code: <FaCode size={24} />,
  university: <FaGraduationCap size={24} />,
  chart: <FaBriefcase size={24} />,
  burger: <FaCoffee size={24} />
};

const Timeline = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-24 bg-slate-50 text-slate-900 relative"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Career & Experience</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            The story of my professional journey, starting from flipping burgers to building complex frontend applications.
          </p>
        </div>

        <div className="relative border-l-4 border-slate-200 ml-4 md:ml-0 md:mx-auto md:w-full md:flex md:flex-col md:items-center md:border-l-0">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200"></div>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative pl-8 md:pl-0 mb-12 w-full md:flex ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-[-11px] md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-brand-500 z-10`}></div>
                
                {/* Content card */}
                <div className={`md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-brand-500/10 transition-shadow duration-300 relative group">
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                        {iconMap[item.icon] || <FaBriefcase size={24} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="text-brand-600 font-semibold">{item.company}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm font-medium text-slate-500 mb-4 inline-block bg-slate-100 px-3 py-1 rounded-full">
                      {item.period}
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;
