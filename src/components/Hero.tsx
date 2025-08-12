@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { Mail, Linkedin, ChevronDown, Github } from 'lucide-react';
-import profileImg from '../assets/profile.png';

 const Hero = () => {
 }
@@ .. @@
               
-            <img
-              src={profileImg}
-              alt="Hasika Seethu Nakka"
-              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-[#00E0FF] ring-opacity-50 z-10"
-            />
+            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto bg-gradient-to-br from-[#00E0FF] to-[#19F5C4] shadow-2xl ring-4 ring-[#00E0FF] ring-opacity-50 z-10 flex items-center justify-center">
+              <div className="text-4xl font-bold text-[#0A1A2F]">HSN</div>
+            </div>
             </div>
           </motion.div>