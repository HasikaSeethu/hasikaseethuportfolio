import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ChevronDown, Github } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#0E2342] to-[#0A1A2F] flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-[#19F5C4] to-[#00E0FF] rounded-full filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#19F5C4] rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-bounce delay-1100"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#19F5C4] rounded-full animate-bounce delay-1500"></div>
        
        {/* Geometric Rings */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#00E0FF] rounded-full opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-[#19F5C4] rounded-full opacity-20 animate-spin-reverse"></div>
        
        {/* Abstract Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="#00E0FF" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M200,800 Q400,700 600,800 T1000,800" stroke="#19F5C4" strokeWidth="1" fill="none" className="animate-pulse delay-1000" />
          <circle cx="150" cy="300" r="50" stroke="#00E0FF" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse delay-500" />
          <circle cx="850" cy="700" r="30" stroke="#19F5C4" strokeWidth="1" fill="none" opacity="0.2" className="animate-pulse delay-1500" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Profile Image with Tech Effects */}
            <div className="relative inline-block">
              {/* Rotating Rings */}
              <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 border-2 border-[#00E0FF] rounded-full animate-spin opacity-30"></div>
              <div className="absolute inset-2 w-44 h-44 sm:w-52 sm:h-52 border border-[#19F5C4] rounded-full animate-spin-reverse opacity-20"></div>
              
              {/* Floating Dots */}
              <div className="absolute -top-2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#19F5C4] rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce delay-600"></div>
              <div className="absolute top-1/2 -left-2 w-1.5 h-1.5 bg-[#19F5C4] rounded-full animate-bounce delay-900"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-xl opacity-20"></div>
              
            <img
              src={profileImg}
              alt="Hasika Seethu Nakka"
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-[#00E0FF] ring-opacity-50 z-10"
            />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Hasika Seethu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#19F5C4]">Nakka</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] font-semibold mb-6"
          >
            Data Analyst | Data Visualization Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            "Turning complex data into impactful insights through clean analysis and compelling dashboards."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] hover:from-[#19F5C4] hover:to-[#00E0FF] text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00E0FF]/25 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
            <a
              href="https://www.linkedin.com/in/hasikaseethu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF] hover:text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00E0FF]/25 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/HasikaSeethu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#19F5C4] text-[#19F5C4] hover:bg-[#19F5C4] hover:text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#19F5C4]/25 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-[#00E0FF] animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;