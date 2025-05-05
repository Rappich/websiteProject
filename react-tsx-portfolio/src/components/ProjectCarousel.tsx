import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "../components/ProjectCard";

export interface Project {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  return (
    <div className="py-10 px-[5%] xl:px-10 max-w-screen-xl mx-auto xl:h-40vh">
      <p className="text-center font-semibold text-gray-600">Browse My Recent</p>
      <h2 className="text-3xl xl:text-5xl font-bold text-center mb-10">Projects</h2>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay={false}
        autoPlaySpeed={4000}
        keyBoardControl
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="px-2"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
