import React from 'react';
import Navigation from './components/Navigation';
import SocialLinks from './components/SocialLinks';
import Hero from './components/Hero';
import Background from './components/Background';
import Logo from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Background />
      <Logo />
      
      {/* RTL and Settings buttons */}
      <div className="fixed top-4 right-4 flex gap-2">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          RTL
        </button>
        <button className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          ⚙️
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center min-h-[calc(100vh-6rem)]">
          <div className="w-full lg:w-1/2 max-w-md">
            <Navigation />
          </div>
          <div className="w-full lg:w-1/2">
            <Hero />
          </div>
        </div>
      </div>

      <SocialLinks />

      <footer className="text-center py-6 text-gray-600">
        <p>© {new Date().getFullYear()} All Rights Reserved By RadDev</p>
      </footer>
    </div>
  );
}

export default App;