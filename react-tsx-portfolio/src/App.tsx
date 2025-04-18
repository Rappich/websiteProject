import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

/* import { LoadingScreen } from './components/LoadingScreen';
 */import { Navbar } from './components/Navbar';
/* import { useState } from 'react';
 */import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';


function App() {
  //Planning to use the loading screen when going from portfolio to company page, 
  // will then move the correct sections to their page in pages folder
  /*   const [isLoaded, setIsLoading] = useState(false);
   */
  return (
    <Router>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
          } bg-white text-gray-500`}
      > */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </Router>
  );
}

export default App;
