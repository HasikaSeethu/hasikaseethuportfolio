import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '💾' },
    { name: 'Excel', icon: '📊' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Seaborn', icon: '📈' },
    { name: 'Matplotlib', icon: '📉' },
    { name: 'Tableau', icon: '📋' },
    { name: 'Power BI', icon: '⚡' },
    { name: 'Looker Studio', icon: '👁️' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'GitHub', icon: '🔧' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0E2342] to-[#0A1A2F] relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-[#19F5C4] to-[#00E0FF] rounded-full filter blur-3xl opacity-15"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-[#00E0FF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-[#19F5C4] rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a final-year Computer Science student with a deep interest in data storytelling, 
              dashboard development, and business intelligence. I specialize in cleaning messy data, 
              performing statistical analysis, and building visual tools to support smarter decisions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in transforming raw data into meaningful insights that drive business 
              value. I enjoy the challenge of finding patterns in complex datasets and presenting 
              them in clear, actionable visualizations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-[#0E2342] to-[#0A1A2F] border border-[#00E0FF]/20 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-[#00E0FF]/10 transform hover:scale-105 transition-all duration-300 text-center hover:border-[#00E0FF]/40"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-semibold text-gray-200">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;