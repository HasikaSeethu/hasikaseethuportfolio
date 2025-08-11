import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0A1A2F] to-[#0E2342] border-t border-[#00E0FF]/20 text-white py-8 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-[#19F5C4] to-[#00E0FF] rounded-full filter blur-3xl opacity-15"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 Hasika Seethu Nakka — Data Analyst
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="mailto:hasikaseethu@gmail.com"
              className="w-10 h-10 bg-[#0A1A2F] border border-[#00E0FF]/30 rounded-lg flex items-center justify-center hover:bg-[#00E0FF] hover:border-[#00E0FF] transition-all duration-300 group hover:shadow-lg hover:shadow-[#00E0FF]/25"
            >
              <Mail className="w-5 h-5 text-[#00E0FF] group-hover:text-[#0A1A2F]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hasikaseethu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0A1A2F] border border-[#00E0FF]/30 rounded-lg flex items-center justify-center hover:bg-[#00E0FF] hover:border-[#00E0FF] transition-all duration-300 group hover:shadow-lg hover:shadow-[#00E0FF]/25"
            >
              <Linkedin className="w-5 h-5 text-[#00E0FF] group-hover:text-[#0A1A2F]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;