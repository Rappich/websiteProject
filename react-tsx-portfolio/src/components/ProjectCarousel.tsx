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
    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-8 2xl:px-6">
      <div className="max-w-screen-xl mx-auto text-center mb-10">
        <p className="text-gray-600 font-semibold">Browse My Recent</p>
        <h2 className="text-3xl xl:text-5xl text-gray-700 font-bold">Projects</h2>
      </div>

      <div className="relative w-full">
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
          dotListClass="flex justify-centermt-6"
          itemClass="px-1 sm:px-2 xl:px-3 2xl:px-2"
        >
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
