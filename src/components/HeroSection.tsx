
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/rD5gsL1d46omHAaj/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sci-fi-light/80 text-lg mb-4 tracking-widest font-light"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-6xl md:text-8xl font-bold text-sci-fi-light mb-4 text-glow"
          >
            Sijan Thapa
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-2xl md:text-3xl text-sci-fi-glow font-light mb-6 tracking-wide"
          >
            AI Enthusiast
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-xl text-sci-fi-light/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Building powerful backend systems & exploring the future with AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowResume(true)}
              className="px-8 py-4 glass-card glow-border text-sci-fi-light font-medium tracking-wide transition-all duration-300 hover:bg-sci-fi-glow/10"
            >
              Download Resume →
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-sci-fi-glow-purple/20 border border-sci-fi-glow-purple/30 rounded-lg text-sci-fi-light font-medium tracking-wide transition-all duration-300 hover:bg-sci-fi-glow-purple/30"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowResume(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="glass-card p-8 max-w-md mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-sci-fi-light mb-4">Resume</h3>
            <p className="text-sci-fi-light/80 mb-6">
              Resume will be available for download soon. Please contact me directly for now.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowResume(false)}
              className="px-6 py-3 bg-sci-fi-glow-purple/20 border border-sci-fi-glow-purple/30 rounded-lg text-sci-fi-light font-medium"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
