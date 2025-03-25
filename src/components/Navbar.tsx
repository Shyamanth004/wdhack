import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            NeuroHire
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">Home</a>
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">For Employers</a>
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">For Candidates</a>
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">How It Works</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="#"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;