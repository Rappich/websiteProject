import React from "react";
import ProjectsCarousel, { Project } from "../components/ProjectCarousel";
import webDevImage from "/assets/www.png";
import munchkinImage from "/assets/munchkin.jpg";
import awsImage from "/assets/AWS2.jpg";
import NeverAloneImage from "/assets/NeverAlone.png";
import { useInView } from 'react-intersection-observer';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { NavigationArrow } from '../components/Navigation';


const projectsData: Project[] = [
  {
    id: 1,
    imageSrc: webDevImage,
    title: "Learning Web Development",
    description: "Work in progress",
    githubUrl: "https://github.com/Rappich/websiteProject.git",
    liveUrl: "#rappich.se",
  },
  {
    id: 2,
    imageSrc: munchkinImage,
    title: "Munchkin Game",
    description: "Work in progress",
    githubUrl: "https://github.com/Rappich/MunchkinProject",
    liveUrl: "#",
  },
  {
    id: 3,
    imageSrc: awsImage,
    title: "Automated Watering System",
    description: "IoT - School project",
    githubUrl: "https://github.com/sandpand/Grupp5-v-xtis",
    liveUrl: "#",
  },
  {
    id: 4,
    imageSrc: NeverAloneImage,
    title: "Never Alone",
    description: "IoT - School project",
    githubUrl: "https://github.com/ChasChallangeIII/NeverAlone",
    liveUrl: "#",
  }

];

const ProjectsSection: React.FC = () => {
  const { ref: sectionInViewRef, inView: isSectionInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const showScrollArrow = isSectionInView;

  return (
    <>
      <section id="projects" ref={sectionInViewRef}>
        <ProjectsCarousel projects={projectsData} />
        <NavigationArrow
          targetId="contact"
          ariaLabel="Go to contact section"
          isVisible={showScrollArrow}
          icon={faArrowDown}
        />
      </section>
    </>

  );
};

export default ProjectsSection;