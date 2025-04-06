import React, { useState, useEffect, useRef } from 'react';
import Timeline, { TimelineEntry } from '../components/Timeline';
import checkmarkIcon from '../assets/checkmark.png';
import bgWorkExp from '../assets/background2.png';
import bgEducation from '../assets/background3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const frontendSkills = [
    { name: 'HTML', level: 'Basic' },
    { name: 'CSS', level: 'Basic' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'React', level: 'Learning' },
    { name: 'Tailwind CSS', level: 'Learning' },
    { name: 'Typescript', level: 'Learning' },
];
const backendSkills = [
    { name: 'C', level: 'Intermediate' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'NoSQL', level: 'Basic' },
    { name: 'SQL', level: 'Basic' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'Node.js', level: 'Learning' },
];

interface SkillItemProps {
    name: string;
    level: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => (
    <article className="flex w-30 justify-start sm:justify-around gap-2">
        <img src={checkmarkIcon} alt="" className="icon h-8 cursor-default" />
        <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-text-primary">{level}</p>
        </div>
    </article>
);

const ExperienceSection: React.FC = () => {
    const [openSectionId, setOpenSectionId] = useState<string | null>(null);
    const experienceSectionRef = useRef<HTMLElement>(null);

    const handleExpandClick = (targetId: string) => {
        setOpenSectionId((prevId) => (prevId === targetId ? null : targetId));
    };

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

    const handleScrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Work Experience and Education Data - to be replaced with actual data once all the logix is in place
    const workExperienceData: TimelineEntry[] = [
        { id: 'we1', imageSrc: 'assets/Rappich.jpg', title: 'HR & IT Consultant | Business Owner', subtitle: 'Rappich Consulting AB', duration: 'Sep 2024 - Current', description: 'While pursuing...', listItems: [], position: 'left' },
        { id: 'we2', imageSrc: 'assets/E.PNG', title: 'HR Business Partner', subtitle: 'Eurenco', duration: 'Jan 2023 - Sep 2024', description: 'As an HR Business partner...', listItems: [], position: 'right' },
    ];
    const educationData: TimelineEntry[] = [
        { id: 'ed1', imageSrc: 'assets/education.png', title: 'System Development', subtitle: 'Chas Academy', duration: '2024 - Present', description: 'Lorum ipsum', listItems: [], position: 'left' },
        { id: 'ed2', imageSrc: 'assets/education.png', title: 'B.Sc. Psychology', subtitle: 'Örebro Universitet', duration: '2011 - 2016', description: 'Lorum ipsum', listItems: [], position: 'right' },
    ];

    return (
        <section
            id="experience"
            ref={experienceSectionRef}
            className="relative pt-[4vh] px-[5%] xl:px-40 min-h-fit xl:h-94vh box-border mt-8 xl:mt-0"
        >
            <p className="section__text__p1 text-center font-semibold">Explore My</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold">Experience</h1>

            {/* Container for the two skill boxes */}
            <div className="experience-details-container flex justify-center flex-col mt-8">
                <div className="about-containers flex flex-wrap xl:flex-nowrap gap-8 mb-8 mt-0 justify-center">

                    {/* Frontend Box */}
                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[300px] xl:h-34vh">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8 xl:mb-24">
                            Frontend Development
                        </h2>
                        <div className="article-container flex flex-row flex-wrap justify-center gap-10 text-left mb-28">
                            {frontendSkills.map((skill) => (
                                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                        <div className="expand-button-container absolute w-full bottom-0 left-0 text-center px-6">
                            <button
                                className="expand-btn font-extrabold transition-all duration-300 ease-in-out w-full xl:w-4/5 mb-8 xl:mr-12 h-24 rounded-2xl text-white border border-white/30 shadow-md hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 active:shadow-inner bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${bgWorkExp})` }}
                                onClick={() => handleExpandClick('expanded-timeline')}
                            >
                                Press to see my Work Experience
                            </button>
                        </div>
                    </div>

                    {/* Backend Box */}
                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[300px] xl:h-34vh">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8 xl:mb-24">
                            Backend Development
                        </h2>
                        <div className="article-container flex flex-row flex-wrap justify-center gap-10 text-left mb-28">
                            {backendSkills.map((skill) => (
                                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                        <div className="expand-button-container absolute w-full bottom-0 left-0 text-center px-6">
                            <button
                                className="expand-btn font-extrabold transition-all duration-300 ease-in-out w-full xl:w-4/5 mb-8 xl:mr-12 h-24 rounded-2xl text-white border border-white/30 shadow-md hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 active:shadow-inner bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${bgEducation})` }}
                                onClick={() => handleExpandClick('expanded-timeline-2')}
                            >
                                Press to see my Education
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Down Arrow Icon */}
            <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow hidden xl:block absolute -right-1 bottom-16 cursor-pointer text-3xl text-black hover:text-gray-500"
                onClick={handleScrollToProjects}
                aria-label="Go to projects section"
            />

            {/* Conditionally Rendered Timelines */}
            {openSectionId === 'expanded-timeline' && (
                <Timeline
                    id="expanded-timeline"
                    title="Work Experience"
                    data={workExperienceData}
                    onClose={() => setOpenSectionId(null)}
                />
            )}
            {openSectionId === 'expanded-timeline-2' && (
                <Timeline
                    id="expanded-timeline-2"
                    title="Education"
                    data={educationData}
                    onClose={() => setOpenSectionId(null)}
                />
            )}
        </section>
    );
};

export default ExperienceSection;