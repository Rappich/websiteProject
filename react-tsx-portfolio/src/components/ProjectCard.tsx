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
        <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-full flex flex-col justify-between bg-white rounded-2xl border border-gray-300 p-4 shadow-sm mx-auto">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-4">
                <img
                    src={imageSrc}
                    alt={`${title} project`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-grow mb-4 text-center">
                <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center text-center items-center gap-4">
                <Button variant="secondary" href={githubUrl} target="_blank">
                    GitHub
                </Button>
                {liveUrl && liveUrl !== "#" && (
                    <Button variant="secondary" href={liveUrl} target="_blank">
                        Live Demo
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
