import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Import the card component
// Placeholder data structure (replace with yours)
import webDevImage from '../assets/www.png'; // Import images
import munchkinImage from '../assets/munchkin.jpg';
import awsImage from '../assets/AWS2.jpg';
// Import FontAwesome if using for arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const projectsData = [
    { id: 1, imageSrc: webDevImage, title: 'Learning Web Development', description: 'Work in progress', githubUrl: 'https://github.com/Rappich/websiteProject.git', liveUrl: '#' }, // Use actual live URL or hide button
    { id: 2, imageSrc: munchkinImage, title: 'Munchkin Game', description: 'Work in progress', githubUrl: 'https://github.com/Rappich/MunchkinProject', liveUrl: '#' },
    { id: 3, imageSrc: awsImage, title: 'Automated Watering System', description: 'IoT - School project', githubUrl: 'https://github.com/sandpand/Grupp5-v-xtis', liveUrl: '#' },
];

const ProjectsSection: React.FC = () => {
    // Handler for arrow click
    const handleScrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="projects" className="relative pt-[4vh] px-[5%] xl:px-40 min-h-fit box-border">
            <p className="section__text__p1 text-center font-semibold">Browse My Recent</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold mb-8">Projects</h1>
            {/* Container for project cards */}
            {/* Reusing 'about-containers' for consistent layout/wrapping */}
            <div className="projects-details-container">
                <div className="about-containers flex flex-wrap xl:flex-nowrap gap-8 mb-8 mt-8 justify-center">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            liveUrl={project.liveUrl}
                        />
                    ))}
                </div>
            </div>

            {/* Down Arrow Icon - hidden on smaller screens */}
            <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow hidden xl:block absolute -right-20 bottom-16 cursor-pointer text-3xl text-black hover:text-gray-500"
                onClick={handleScrollToContact}
                aria-label="Go to contact section"
            />
        </section>
    );
};
export default ProjectsSection;