import React from 'react';
import Button from './Button';

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    githubUrl: string;
    liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imageSrc,
    title,
    description,
    githubUrl,
    liveUrl,
}) => {
    return (
        <div className="flex flex-col bg-bg-light rounded-2xl border border-border-light p-4 sm:p-6 text-center h-full max-w-sm mx-auto shadow-sm">

            <div className="mb-4 w-full aspect-video overflow-hidden rounded-2xl">
                <img
                    src={imageSrc}
                    alt={`${title} project`}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-grow mb-4">
                <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="secondary" href={githubUrl} target="_blank">
                    GitHub
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
