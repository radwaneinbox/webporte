import React from 'react';
import { motion } from 'framer-motion';

interface NavItemProps {
  item: {
    icon: React.ReactNode;
    label: string;
    color: string;
    description: string;
  };
  index: number;
}

const NavItem = ({ item, index }: NavItemProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`bg-gradient-to-br ${item.color} p-3 rounded-xl text-white flex flex-col items-center justify-center gap-1.5 aspect-square group relative overflow-hidden`}
    >
      <motion.div
        whileHover={{ rotate: 12 }}
        transition={{ duration: 0.2 }}
        className="w-5 h-5"
      >
        {item.icon}
      </motion.div>
      <span className="text-xs font-medium">{item.label}</span>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/20 flex items-center justify-center"
      >
        <p className="text-[10px] px-1 text-center text-white">
          {item.description}
        </p>
      </motion.div>
    </motion.button>
  );
};

export default NavItem;