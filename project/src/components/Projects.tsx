import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: "Customer Segmentation",
      year: "2024",
      description: "Applied K-means clustering on customer behavior datasets using Python and Excel. Designed Tableau dashboards for identifying customer groups and marketing personas.",
      tools: ["Python", "K-means", "Tableau", "Excel"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Road Accident Analysis",
      year: "2023",
      description: "Cleaned accident datasets using Excel & SQL. Built visual reports in Power BI and Tableau to identify accident hotspots by location and time.",
      tools: ["SQL", "Power BI", "Excel"],
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Credit Risk Analysis",
      year: "2025",
      description: "Conducted EDA on borrower credit datasets. Uncovered risk profiles using Seaborn plots to assist with smarter lending decisions.",
      tools: ["Python", "Pandas", "Seaborn"],
      image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0E2342] to-[#0A1A2F] relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-20 w-64 h-64 bg-gradient-to-r from-[#19F5C4] to-[#00E0FF] rounded-full filter blur-3xl opacity-15"></div>
        
        {/* Abstract Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <path d="M0,300 Q250,200 500,300 T1000,300" stroke="#00E0FF" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M0,700 Q250,600 500,700 T1000,700" stroke="#19F5C4" strokeWidth="1" fill="none" className="animate-pulse delay-1000" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent data analysis projects showcasing various techniques and tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#0E2342] to-[#0A1A2F] border border-[#00E0FF]/20 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#00E0FF]/20 transition-all duration-300 transform hover:-translate-y-2 group hover:border-[#00E0FF]/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                {/* Tech Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00E0FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-sm text-[#00E0FF] font-medium bg-[#00E0FF]/10 border border-[#00E0FF]/30 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-[#0A1A2F] border border-[#19F5C4]/30 text-[#19F5C4] text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;