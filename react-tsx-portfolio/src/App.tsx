import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
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
