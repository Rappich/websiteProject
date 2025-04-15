import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';


function App() {
  const [isLoaded, setIsLoading] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
          } bg-white text-gray-500`}
      >
        {isLoaded && <Navbar />}
        {isLoaded && <HeroSection />}
        {isLoaded && <AboutSection />}
        {isLoaded && <ExperienceSection />}
        {isLoaded && <ProjectSection />}
      </div>
    </Router>
  );
}

export default App;
