import React from "react";
import ProjectsCarousel, { Project } from "../components/ProjectCarousel";

import webDevImage from "/assets/www.png";
import munchkinImage from "/assets/munchkin.jpg";
import awsImage from "/assets/AWS2.jpg";

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
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <ProjectsCarousel projects={projectsData} />
    </section>
  );
};

export default ProjectsSection;