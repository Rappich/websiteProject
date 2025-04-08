import React, { useState, useEffect, useRef } from 'react';
import Timeline, { TimelineEntry } from '../components/Timeline';
import { faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavigationArrow, CloseButton } from '../components/Navigation';
import { useInView } from 'react-intersection-observer';
import SkillProgressBar from '../components/SkillProgressBar';

/* import { Switch } from "@material-tailwind/react";
 
export function SwitchLabel() {
  return <Switch label="Automatic Update" />;
} */
interface Skill {
    name: string;
    level: number;
}

const frontendSkills: Skill[] = [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'React', level: 3 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'Typescript', level: 3 },
];

const backendSkills: Skill[] = [
    { name: 'C', level: 7 },
    { name: 'C++', level: 7 },
    { name: 'NoSQL', level: 5 },
    { name: 'SQL', level: 5 },
    { name: 'Git', level: 7 },
    { name: 'Node.js', level: 7 },
];


const ExperienceSection: React.FC = () => {
    const [openSectionId, setOpenSectionId] = useState<string | null>(null);

    const { ref: sectionInViewRef, inView: isSectionInView } = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    const handleExpandClick = (targetId: string) => {
        setOpenSectionId((prevId) => (prevId === targetId ? null : targetId));
    };

    const handleCloseTimeline = () => {
        setOpenSectionId(null);
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

    const workExperienceData: TimelineEntry[] = [

        { id: 'we1', imageSrc: '/assets/Rappich.jpg', title: 'HR & IT Consultant | Business Owner', subtitle: 'Rappich Consulting AB', duration: 'Sep 2024 - Current', description: 'While pursuing my studies, I founded Rappich Consulting and currently work as a part-time consultant at Eurenco. I create, develop, and implement new HR strategies within Recruitment, Learning & Development, Onboarding, Performance, and Employee Relations. As a project lead, I focus on transforming HR processes, ensuring efficiency, and driving long-term growth through strategic and technical solutions.', listItems: [], position: 'left' },
        { id: 'we2', imageSrc: '/assets/E.PNG', title: 'HR Business Partner', subtitle: 'Eurenco', duration: 'Jan 2023 - Sep 2024', description: "As an HR Business partner at Eurenco Bofors AB, I work with our management team to support and guide them in HR-related topics. With an industry that's been under deconstruction for a long time and now is on an uprise, my main task is to act as a project leader with the goal to create, develop & implement new HR strategies within the HR areas: Recruitment, Learning & Development, Onboarding, Performance, co-worker relations, and other areas.", listItems: [], position: 'right' },
        { id: 'we3', imageSrc: '/assets/tre.jpg', title: 'Learning & Development Partner', subtitle: 'Tre', duration: 'May 2022 - Nov 2022', description: 'Contribute to an efficient, effective, and consistent execution of the competence & learning agenda. Mainly working as project lead for a project revolving around a new sales- & service method for Tre. With the end goal to ensure that we had a unitary organization and one way to meet our customers.', listItems: [], position: 'left' },
        { id: 'we4', imageSrc: '/assets/ikea.jpg', title: 'Learning & Delivery Specialist', subtitle: 'IKEA', duration: 'Jan 2023 - Sep 2024', description: 'Contribute to an efficient, effective, and consistent execution of the competence & learning agenda. While developing solutions to ensure delivery on business targets and securing a great customer and co-worker experience.', listItems: ['Contribute to ensuring that global tools and learning offers are used, keeping the Swedish competence & development offer up to date.', 'Network with stakeholders across the country organization to best understand and support the delivery of the competence & development agenda.', 'Develop, optimize, and digitize learning processes & tools for IKEA Sweden, ensuring they meet our ever-changing market.'], position: 'right' },
        { id: 'we5', imageSrc: '/assets/ikea.jpg', title: 'HR Business Partner', subtitle: 'IKEA', duration: 'Sep 2024 - Current', description: 'As an HR Business partner at IKEA Borlänge, I worked together with other functions in the unit to ensure that all HR processes and tools are implemented. By developing and coaching the people in the organization, I contributed to the company\'s growth and set goals.', listItems: ['Ensure a fluent recruitment process at the unit.', 'Ensure a fluent recruitment process at the unit.', 'Develop new routines and collaborations with local business partners to enrich equality, diversity, and inclusion for the store.', 'Strengthen the leadership at the store.', 'Enable the Competence & Development agenda for the unit.', 'Secure health & well-being initiatives.', 'Support in rehabilitation processes and other co-worker relations-related questions.'], position: 'left' },
        { id: 'we6', imageSrc: '/assets/ikea.jpg', title: 'HR Generalist', subtitle: 'IKEA', duration: 'Jan 2016 - Sep 2024', description: 'As an HR Business partner at IKEA Örebro, I worked together with other functions in the unit to ensure that all HR processes and tools are implemented. By developing and coaching the people in the organization, I contributed to the company\'s growth and set goals.', listItems: ['Ensure a fluent recruitment process at the unit.', 'Strengthen leadership at the store.', 'Ensure and execute delivery of learning & training at the unit level.', 'Enable the Competence & Development agenda for the unit.', 'Secure health & well-being initiatives.'], position: 'right' },
    ];

    const educationData: TimelineEntry[] = [
        { id: 'ed1', imageSrc: '/assets/education.png', title: 'System Development', subtitle: 'Chas Academy', duration: '2024 - Present', description: 'Lorum ipsum', listItems: [], position: 'left' },
        { id: 'ed2', imageSrc: '/assets/education.png', title: 'B.Sc. Psychology', subtitle: 'Örebro Universitet', duration: '2011 - 2016', description: 'Lorum ipsum', listItems: [], position: 'right' },
    ];
    const showScrollArrow = isSectionInView && openSectionId === null;
    const showCloseButton = openSectionId !== null;

    return (
        <section
            id="experience"
            ref={sectionInViewRef}
            className="relative pt-[4vh] px-[5%] xl:px-10 min-h-screen box-border max-w-screen-xl mx-auto pb-20"
        >
            <p className="section__text__p1 text-center font-semibold">Explore My</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold ">Experience & Skills</h1>

            <div className="experience-details-container flex justify-center flex-col mt-8">
                <div className="about-containers flex flex-wrap xl:flex-nowrap gap-8 mb-8 mt-0 justify-center">


                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[400px]">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8"> {/* Removed xl:mb-24 */}
                            Frontend Development
                        </h2>
                        <div className="article-container flex flex-col space-y-4 mb-28 px-4 md:px-8"> {/* Stack vertically */}
                            {frontendSkills.map((skill) => (
                                <SkillProgressBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                        <div className="expand-button-container absolute w-full bottom-0 left-0 text-center px-6 pb-6"> {/* Added padding bottom */}
                            <button
                                className="expand-btn font-extrabold transition-all duration-300 ease-in-out w-full xl:w-4/5 h-24 rounded-2xl text-white border border-white/30 shadow-md hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 active:shadow-inner bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(/assets/background2.png)` }}
                                onClick={() => handleExpandClick('expanded-timeline')}
                            >
                                Press to see my Work Experience
                            </button>
                        </div>
                    </div>


                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[400px]">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8"> {/* Removed xl:mb-24 */}
                            Backend Development & Tools
                        </h2>
                        <div className="article-container flex flex-col space-y-4 mb-28 px-4 md:px-8"> {/* Stack vertically */}
                            {backendSkills.map((skill) => (
                                <SkillProgressBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                        <div className="expand-button-container absolute w-full bottom-0 left-0 text-center px-6 pb-6"> {/* Added padding bottom */}
                            <button
                                className="expand-btn font-extrabold transition-all duration-300 ease-in-out w-full xl:w-4/5 h-24 rounded-2xl text-white border border-white/30 shadow-md hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 active:shadow-inner bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(/assets/background3.png)` }}
                                onClick={() => handleExpandClick('expanded-timeline-2')}
                            >
                                Press to see my Education
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {openSectionId === 'expanded-timeline' && (
                <Timeline
                    id="expanded-timeline"
                    title="Work Experience"
                    data={workExperienceData}
                    onClose={handleCloseTimeline}
                />
            )}
            {openSectionId === 'expanded-timeline-2' && (
                <Timeline
                    id="expanded-timeline-2"
                    title="Education"
                    data={educationData}
                    onClose={handleCloseTimeline}
                />
            )}

            <NavigationArrow
                targetId="projects"
                ariaLabel="Go to projects section"
                isVisible={showScrollArrow}
                icon={faArrowDown}
            />
            <CloseButton
                onClick={handleCloseTimeline}
                ariaLabel="Close section"
                isVisible={showCloseButton}
                icon={faTimes}
            />

        </section >
    );
};

export default ExperienceSection;