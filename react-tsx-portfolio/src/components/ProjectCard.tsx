import React from 'react';
import Button from './Button';

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    githubUrl: string;
    liveUrl?: string; // Optional live demo URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, githubUrl, liveUrl }) => {
    return (
        <div className="details-container color-container p-4 md:p-6 flex flex-col px-8 bg-bg-light rounded-2xl border-[0.1rem] border-border-light text-center h-full max-w-sm mx-auto">

            <div className="article-container mb-4 flex-shrink-0">
                <img src={imageSrc} alt={`${title} project`} className="rounded-2xl w-full h-60 object-cover mx-auto" />
            </div>

            <div className="flex-grow mb-4">
                <h2 className="experience-sub-title project-title mt-0 mb-2 text-black text-xl font-semibold">{title}</h2>
                <p className="project-description">{description}</p>
            </div>

            <div className="btn-container flex flex-col sm:flex-row justify-center items-center gap-4 flex-shrink-0">
                <Button variant="secondary" href={githubUrl} target="_blank">
                    Github
                </Button>
                {liveUrl && liveUrl !== '#' && (
                    <Button variant="secondary" href={liveUrl} target="_blank">
                        Live Demo
                    </Button>
                )}
            </div>

        </div>
    );
};
export default ProjectCard;