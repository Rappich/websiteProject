import React, { useState, useEffect } from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { NavigationArrow } from '../components/Navigation';
import { useInView } from 'react-intersection-observer';
import ProgressBar from '../components/ProgressBar';

interface Skill {
    name: string;
    level: number;
}

const frontendSkills: Skill[] = [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'JavaScript', level: 3 },
    { name: 'React', level: 3 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'Typescript', level: 3 },
];

const backendSkills: Skill[] = [
    { name: 'C', level: 6 },
    { name: 'C++', level: 6 },
    { name: 'NoSQL', level: 2 },
    { name: 'SQL', level: 3 },
    { name: 'Git', level: 5 },
    { name: 'Node.js', level: 2 },
    { name: 'Embedded Systems', level: 5 },
];

const ExperienceSection: React.FC = () => {
    const [openSectionId] = useState<string | null>(null);

    const { ref: sectionInViewRef, inView: isSectionInView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    useEffect(() => {
        if (openSectionId) {
            const timer = setTimeout(() => {
                const element = document.getElementById(openSectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [openSectionId]);

    const showScrollArrow = isSectionInView && openSectionId === null;

    return (
        <section
            id="experience"
            ref={sectionInViewRef}
            className="relative pt-6 pb-20 px-4 sm:px-6 xl:px-10 box-border max-w-screen-xl mx-auto"
        >
            <h2 className="text-base sm:text-lg font-semibold  text-gray-600 text-center mb-1">Explore My</h2>
            <h1 className="text-3xl xl:text-5xl text-center  text-gray-600 font-bold">Programming Skills</h1>

            <div className="flex flex-col items-center justify-center mt-8">
                <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
                    <div className="w-full sm:max-w-md mx-auto bg-white rounded-2xl border text-center p-6 min-h-[400px]">
                        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-8">
                            Frontend Development
                        </h3>
                        <div className="flex flex-col items-center space-y-4 px-4 md:px-8">
                            {frontendSkills.map((skill) => (
                                <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>

                    <div className="w-full sm:max-w-md mx-auto bg-white rounded-2xl border text-center p-6 min-h-[400px]">
                        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-8">
                            Backend Development & Tools
                        </h3>
                        <div className="flex flex-col items-center space-y-4 px-4 md:px-8">
                            {backendSkills.map((skill) => (
                                <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">

                <NavigationArrow
                    targetId="projects"
                    ariaLabel="Go to projects section"
                    isVisible={showScrollArrow}
                    icon={faArrowDown}
                />
            </div>
        </section>

    );
};

export default ExperienceSection;
