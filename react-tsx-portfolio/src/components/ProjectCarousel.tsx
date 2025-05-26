import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";

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
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  return (
    <div className="w-full">
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay={false}
        keyBoardControl
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderDotsOutside={true}
        containerClass="pb-10"
        dotListClass="flex justify-center mt-6"
        itemClass="px-1 sm:px-2 xl:px-3 2xl:px-2"
      >
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
