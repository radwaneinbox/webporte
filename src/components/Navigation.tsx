import React from 'react';
import { User, Settings, HelpCircle, Folder, FileText, Image, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import NavItem from './NavItem';

const Navigation = () => {
  const navItems = [
    { icon: <User />, label: 'ABOUT', color: 'from-purple-500 to-blue-500', description: 'Learn about my journey' },
    { icon: <Settings />, label: 'SERVICE', color: 'from-blue-500 to-purple-500', description: 'What I offer' },
    { icon: <HelpCircle />, label: 'FAQ', color: 'from-purple-500 to-blue-500', description: 'Common questions' },
    { icon: <Folder />, label: 'PORTFOLIO', color: 'from-blue-500 to-purple-500', description: 'View my work' },
    { icon: <FileText />, label: 'BLOG', color: 'from-purple-500 to-blue-500', description: 'Read my thoughts' },
    { icon: <Image />, label: 'GALLERY', color: 'from-blue-500 to-purple-500', description: 'See my designs' },
    { icon: <Users />, label: 'CONTACT', color: 'from-purple-500 to-blue-500', description: 'Get in touch' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl"></div>
      <div className="grid grid-cols-3 gap-4 p-6 relative">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Navigation;