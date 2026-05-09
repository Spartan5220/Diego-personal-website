import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUtensils } from 'react-icons/fa';
import hobbiesData from '../data/hobbies.json';

const Hobbies = () => {
  return (
    <motion.section 
      id="hobbies" 
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Hobbies & Interests</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          {/* Gym Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-600 text-white rounded-2xl shadow-lg shadow-brand-500/30">
                <FaDumbbell size={32} />
              </div>
              <h3 className="text-3xl font-bold dark:text-white">Gym & Bodybuilding</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">The Approach</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {hobbiesData.gym.nutrition}
                </p>
              </div>
              
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {hobbiesData.gym.split.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl border ${item.workout.includes('Rest') ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-white dark:bg-slate-900 border-brand-100 dark:border-slate-800 shadow-md hover:shadow-lg hover:shadow-brand-500/10 dark:shadow-slate-900/50'} flex flex-col`}
                  >
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">{item.day}</p>
                    <p className={`font-semibold text-lg ${item.workout.includes('Rest') ? 'text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                      {item.workout}
                    </p>
                    {item.notes && (
                      <p className="text-xs font-medium text-rose-500 dark:text-rose-400 mt-1 mb-2 italic">{item.notes}</p>
                    )}
                    {item.exercises && item.exercises.length > 0 && (
                      <ul className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-400 list-disc list-outside ml-4 flex-grow">
                        {item.exercises.map((ex, i) => <li key={i}>{ex}</li>)}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Food Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg shadow-orange-500/30">
                <FaUtensils size={32} />
              </div>
              <h3 className="text-3xl font-bold dark:text-white">Food & Culinary</h3>
            </div>
            
            <div className="masonry-grid">
              {hobbiesData.food.map((item) => (
                <div key={item.id} className="masonry-item relative group rounded-2xl overflow-hidden cursor-pointer bg-slate-200">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-lg">{item.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;
