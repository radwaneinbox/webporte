import React from 'react';
import { User, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const name = "Radioane".split("");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 relative z-10"
    >
      <div className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
        >
          Hello!
        </motion.h2>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl gradient-text font-bold"
            >
              I'M
            </motion.span>
            <div className="flex">
              {name.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold relative z-10 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Front End Developer
            </h3>
            <div className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-gray-600 text-lg leading-relaxed max-w-2xl"
      >
        Passionate frontend developer specializing in creating beautiful, responsive web applications. 
        With expertise in React, TypeScript, and modern web technologies, I transform ideas into 
        exceptional user experiences.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="flex gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <User className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
          <span className="relative z-10">About Me</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-full hover:bg-purple-50 relative overflow-hidden"
        >
          <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Download CV</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;