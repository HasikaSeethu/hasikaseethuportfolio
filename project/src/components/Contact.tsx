import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:hasikaseethu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      // Open default email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0A1A2F] to-[#0E2342] relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-[#19F5C4] to-[#00E0FF] rounded-full filter blur-3xl opacity-15"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-20 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-[#19F5C4] rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce delay-1100"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new data projects and collaborate with teams 
                looking to leverage data for better decision-making.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:hasikaseethu@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#0E2342] to-[#0A1A2F] border border-[#00E0FF]/20 rounded-lg hover:border-[#00E0FF]/40 hover:shadow-lg hover:shadow-[#00E0FF]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-lg flex items-center justify-center group-hover:bg-[#00E0FF]/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#00E0FF]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">hasikaseethu@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hasikaseethu/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#0E2342] to-[#0A1A2F] border border-[#00E0FF]/20 rounded-lg hover:border-[#00E0FF]/40 hover:shadow-lg hover:shadow-[#00E0FF]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-lg flex items-center justify-center group-hover:bg-[#00E0FF]/20 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-[#00E0FF]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-white font-medium">linkedin.com/in/hasikaseethu</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-20"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A1A2F]/50 backdrop-blur-sm p-6 rounded-xl border border-[#00E0FF]/20">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#00E0FF]/30 text-white rounded-lg focus:ring-2 focus:ring-[#00E0FF] focus:border-[#00E0FF] transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="Your name"
                  style={{ pointerEvents: 'auto' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#00E0FF]/30 text-white rounded-lg focus:ring-2 focus:ring-[#00E0FF] focus:border-[#00E0FF] transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="your.email@example.com"
                  style={{ pointerEvents: 'auto' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#00E0FF]/30 text-white rounded-lg focus:ring-2 focus:ring-[#00E0FF] focus:border-[#00E0FF] transition-all duration-300 resize-none placeholder-gray-400 focus:outline-none"
                  placeholder="Tell me about your project..."
                  style={{ pointerEvents: 'auto' }}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  ✅ Email client opened! Please send the email to complete your message.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  ❌ Error opening email client. Please try again or email directly at hasikaseethu@gmail.com
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full bg-gradient-to-r from-[#00E0FF] to-[#19F5C4] hover:from-[#19F5C4] hover:to-[#00E0FF] text-[#0A1A2F] py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#00E0FF]/25 cursor-pointer ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ pointerEvents: 'auto' }}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;