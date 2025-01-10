import React from 'react';
import { Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, color: 'bg-purple-500', label: 'Facebook' },
    { icon: <Twitter className="w-4 h-4" />, color: 'bg-blue-500', label: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4" />, color: 'bg-purple-500', label: 'LinkedIn' },
    { icon: <MessageSquare className="w-4 h-4" />, color: 'bg-blue-500', label: 'Message' },
  ];

  return (
    <div className="fixed left-6 top-24 flex flex-col gap-3">
      {socialLinks.map((link, index) => (
        <div key={index} className="relative group">
          <button
            className={`${link.color} p-2 rounded-lg text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg w-8 h-8 flex items-center justify-center group-hover:rotate-12`}
            aria-label={link.label}
          >
            {link.icon}
          </button>
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {link.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;