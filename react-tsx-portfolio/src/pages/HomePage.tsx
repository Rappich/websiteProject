import React from 'react';
// Import all the sections
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';
// Note: Footer and Navbar are likely rendered in App.tsx if common to all pages

const HomePage: React.FC = () => {
    return (
        <> {/* Use Fragment shorthand <>...</> */}
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};

export default HomePage;