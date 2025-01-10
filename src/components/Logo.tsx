import React from 'react';
import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:rotate-180">
            <Code2 className="w-6 h-6 text-white transform transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent relative">
          RadDev
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
        </span>
      </div>
    </div>
  );
};

export default Logo;