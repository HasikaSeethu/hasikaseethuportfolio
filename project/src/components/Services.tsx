import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, PieChart, TrendingUp, FileText } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Data Cleaning & EDA",
      description: "Removing duplicates, handling nulls, feature exploration"
    },
    {
      icon: <PieChart className="w-12 h-12 text-blue-600" />,
      title: "Dashboard Design",
      description: "Building interactive dashboards in Tableau & Power BI"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Business Intelligence",
      description: "KPIs, insights, and reporting to support decision making"
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Data Reporting",
      description: "Visual storytelling using Python (Seaborn, Matplotlib)"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0A1A2F] to-[#0E2342] relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-[#19F5C4] to-[#00E0FF] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-15"></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-1/3 right-10 w-20 h-20 border border-[#00E0FF] rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-20 w-16 h-16 border border-[#19F5C4] rounded-full opacity-15 animate-spin-reverse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What I Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive data analysis services to help businesses make informed decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#0E2342] to-[#0A1A2F] border border-[#00E0FF]/20 p-8 rounded-xl text-center hover:shadow-2xl hover:shadow-[#00E0FF]/20 transition-all duration-300 transform hover:-translate-y-2 group hover:border-[#00E0FF]/40"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,224,255,0.5)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;