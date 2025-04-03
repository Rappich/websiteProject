import React from 'react';
import Button from './Button'; // Reuse the button component

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    githubUrl: string;
    liveUrl?: string; // Optional live demo URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, githubUrl, liveUrl }) => {
    return (
        // Reusing 'details-container' and 'color-container' styles
        <div className="details-container color-container p-6 flex-1 bg-bg-light rounded-2xl border-[0.1rem] border-border-light text-center flex flex-col justify-between"> {/* Added flex col */}
            {/* Article container for image */}
            <div className="article-container mb-4">
                <img src={imageSrc} alt={`${title} project`} className="project-img rounded-2xl w-[90%] h-auto mx-auto" /> {/* Assume auto height */}
            </div>
            {/* Text content */}
            <div>
                <h2 className="experience-sub-title project-title m-4 text-black text-xl font-semibold">{title}</h2>
                <p className="project-description mb-4">{description}</p>
                {/* Button container */}
                <div className="btn-container flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button variant="secondary" href={githubUrl} target="_blank">
                        Github
                    </Button>
                    {/* Conditionally render Live Demo button */}
                    {liveUrl && liveUrl !== '#' && (
                        <Button variant="secondary" href={liveUrl} target="_blank">
                            Live Demo
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;