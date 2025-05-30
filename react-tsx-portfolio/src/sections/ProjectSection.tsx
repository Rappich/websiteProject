import React from "react";
import { useInView } from "react-intersection-observer";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ProjectsCarousel from "../components/ProjectCarousel";
import { NavigationArrow } from '../components/Navigation';

import webDevImage from "/assets/www.png";
import munchkinImage from "/assets/munchkin.jpg";
import awsImage from "/assets/AWS2.jpg";
import NeverAloneImage from "/assets/NeverAlone.png";

const projectsData = [
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
  },
];

const ProjectsSection: React.FC = () => {
  const { ref: sectionInViewRef, inView: isSectionInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section
      id="projects"
      ref={sectionInViewRef}
      className="relative pt-6 px-5 xl:px-10 min-h-fit box-border max-w-screen-xl mx-auto"
    >
      <div className="pb-32 sm:pb-32 xl:pb-40">
        <h2 className="text-base sm:text-lg font-semibold text-gray-600 text-center mb-1">
          Browse My Recent
        </h2>
        <h1 className="text-3xl xl:text-5xl text-center text-gray-600 font-bold">
          Projects
        </h1>

        <div className="mt-10">
          <ProjectsCarousel projects={projectsData} />
        </div>
      </div>

      <div className="mb-80 flex justify-center gap-4">
        <NavigationArrow
          targetId="contact"
          ariaLabel="Go to contact section"
          isVisible={isSectionInView}
          icon={faArrowDown}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
