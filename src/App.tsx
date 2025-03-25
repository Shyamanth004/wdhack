import React, { useState } from 'react';
import { Mic, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';

function App() {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(!isListening);
    // Voice search implementation would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blurred Background */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[200%] h-[120%] opacity-40 blur-2xl bg-gradient-to-r from-blue-600 via-teal-500 to-blue-400 dark:bg-none"></div>

          {/* Wave Animation */}
          <div className="wave-container absolute inset-0 z-0">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
          </div>
        </div>

        {/* Foreground Content */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="tektur text-4xl py-4 mt-12 sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 mb-6 animate-fade-in">
            Empowering Neurodiverse Talent
            <br />
            Redefining Hiring
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xl mb-8">
            Connect with exceptional talent and inclusive employers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
              Find Talent
            </button>
            <button className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all transform hover:scale-105">
              Join as Candidate
            </button>
          </div>
        </div>

        {/* Voice Search */}
        <div
          className={`cursor-pointer p-8 rounded-full bg-white dark:bg-slate-800 shadow-xl transition-all transform hover:scale-105 relative z-10 ${isListening ? 'animate-pulse ring-4 ring-blue-500' : ''}`}
          onClick={handleVoiceSearch}
        >
          <Mic size={48} className={`text-blue-600 ${isListening ? 'animate-pulse' : ''}`} />
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-300 relative z-10">
          Click to search jobs with voice
        </p>
      </section>


      {/* Bento Grid Section */}
      <BentoGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NeuroHire</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Empowering neurodiverse talent worldwide
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">About</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;