@@ .. @@
 import React from 'react';
 import Navigation from './components/Navigation';
 import Hero from './components/Hero';
 import About from './components/About';
 import Services from './components/Services';
 import Projects from './components/Projects';
 import Contact from './components/Contact';
 import Footer from './components/Footer';

 function App() {
+  console.log('App component rendering');
+  
   return (
     <div className="font-inter">
       <Navigation />
       <section id="hero">
         <Hero />
       </section>
       <About />
       <Services />
       <Projects />
       <Contact />
       <Footer />
     </div>
   );
 }

 export default App;