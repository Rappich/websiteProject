import React, { useState, useEffect, useRef } from 'react';
import { faArrowDown, } from '@fortawesome/free-solid-svg-icons';
import { NavigationArrow, } from '../components/Navigation';
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
    const [openSectionId, setOpenSectionId] = useState<string | null>(null);

    const { ref: sectionInViewRef, inView: isSectionInView } = useInView({
        threshold: 0.3,
        triggerOnce: false
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
            className="relative pt-[4vh] px-[5%] xl:px-10 box-border max-w-screen-xl mx-auto pb-20"
        >
            <p className="section__text__p1 text-center font-semibold">Explore My</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold ">Programing Skills</h1>

            <div className="experience-details-container flex justify-center flex-col mt-8">
                <div className="about-containers flex flex-wrap xl:flex-nowrap gap-8 mb-8 mt-0 justify-center">


                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[400px]">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8">
                            Frontend Development
                        </h2>
                        <div className="flex flex-col items-center justify-center space-y-4 mb-8 px-4 md:px-8">
                            {frontendSkills.map((skill) => (
                                <ProgressBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>


                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[400px]">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8">
                            Backend Development & Tools
                        </h2>
                        <div className="flex flex-col items-center justify-center space-y-4 mb-8 px-4 md:px-">
                            {backendSkills.map((skill) => (
                                <ProgressBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <NavigationArrow
                targetId="projects"
                ariaLabel="Go to projects section"
                isVisible={showScrollArrow}
                icon={faArrowDown}
            />


        </section >
    );
};

export default ExperienceSection;