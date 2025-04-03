import React, { useState, useEffect, useRef } from 'react';
import TimelineSection from '../components/TimelineSection'; // Update the path to the correct location
// Import skill checkmark icon
import checkmarkIcon from '../assets/checkmark.png';
// Import background images for buttons
import bgWorkExp from '../assets/background2.png';
import bgEducation from '../assets/background3.png';
// Import FontAwesome if using for arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

// --- Placeholder Data (Replace with your actual data later) ---
const frontendSkills = [
    { name: 'HTML', level: 'Basic' },
    { name: 'CSS', level: 'Basic' },
    { name: 'JavaScript', level: 'Basic' },
    // Add React, Tailwind, TS later as you learn them!
];
const backendSkills = [
    { name: 'C', level: 'Intermediate' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'NoSQL', level: 'Basic' },
    { name: 'SQL', level: 'Basic' },
    { name: 'Git', level: 'Intermediate' },
    // Add Node.js later
];

// Example data structure for timeline (replace with real data)
const workExperienceData = [
    { id: 'we1', imageSrc: 'assets/Rappich.jpg', title: 'HR & IT Consultant | Business Owner', subtitle: 'Rappich Consulting AB', duration: 'Sep 2024 - Current', description: 'While pursuing...', listItems: [] },
    { id: 'we2', imageSrc: 'assets/E.PNG', title: 'HR Business Partner', subtitle: 'Eurenco', duration: 'Jan 2023 - Sep 2024', description: 'As an HR Business partner...', listItems: [] },
    // Add other work entries...
];
const educationData = [
    { id: 'ed1', imageSrc: 'assets/education.png', title: 'System Development (Current)', subtitle: 'University Name', duration: 'Year - Present', description: 'Relevant courses...', listItems: [] },
    { id: 'ed2', imageSrc: 'assets/education.png', title: 'B.Sc. Psychology', subtitle: 'Another University', duration: 'Year - Year', description: 'Thesis, relevant courses...', listItems: [] },
    // Add other education entries...
];
// --- End Placeholder Data ---

// Define interface for SkillItem props
interface SkillItemProps {
    name: string;
    level: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => (
    <article className="flex w-40 justify-start sm:justify-around gap-2"> {/* Adjusted justify for alignment */}
        <img src={checkmarkIcon} alt="" className="icon h-8 cursor-default" />
        <div>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-text-primary'>{level}</p>
        </div>
    </article>
);


const ExperienceSection: React.FC = () => {
    // --- State for Timeline Visibility (Phase 3) ---
    const [openSectionId, setOpenSectionId] = useState<string | null>(null);
    const experienceSectionRef = useRef<HTMLElement>(null);

    // --- Handler for Expand Buttons (Phase 3) ---
    const handleExpandClick = (targetId: string) => {
        setOpenSectionId(prevId => (prevId === targetId ? null : targetId));
    };

    // --- Effect for Scrolling (Phase 3) ---
    useEffect(() => {
        if (openSectionId) {
            const timer = setTimeout(() => {
                const element = document.getElementById(openSectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 50);
            return () => clearTimeout(timer);
        } else {
            // Optional: Scroll back to top of experience section when a timeline closes
            // Consider if this feels jarring or helpful.
            // if (experienceSectionRef.current) {
            //    experienceSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // }
        }
    }, [openSectionId]);


    // Handler for arrow click (simple scroll)
    const handleScrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        // Using ref for potential scroll-back target
        <section id="experience" ref={experienceSectionRef} className="relative pt-[4vh] px-[5%] xl:px-40 min-h-fit xl:h-94vh box-border mt-8 xl:mt-0">
            <p className="section__text__p1 text-center font-semibold">Explore My</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold">Experience</h1>

            {/* Container for the two skill boxes */}
            <div className="experience-details-container flex justify-center flex-col mt-8">
                {/* Uses flex-wrap on smaller screens implicitly via about-containers */}
                <div className="about-containers flex flex-wrap xl:flex-nowrap gap-8 mb-8 mt-0 justify-center">

                    {/* Frontend Box */}
                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[300px] xl:h-34vh"> {/* Added min-height */}
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8 xl:mb-24">Frontend Development</h2>
                        {/* Article container for skills */}
                        <div className="article-container flex flex-row flex-wrap justify-center gap-10 text-left mb-28"> {/* Added mb for button space, adjusted justify */}
                            {frontendSkills.map(skill => (
                                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                        {/* Expand Button Container */}
                        <div className="expand-button-container absolute w-full bottom-0 left-0 text-center px-6"> {/* Added padding */}
                            <button
                                className="expand-btn font-extrabold transition-all duration-300 ease-in-out w-full xl:w-4/5 mb-8 xl:mr-12 h-24 rounded-2xl text-white border border-white/30 shadow-md hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 active:shadow-inner bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${bgWorkExp})` }} // Apply background image inline
                                data-target="expanded-timeline" // Keep for potential non-React fallback/debugging
                                onClick={() => handleExpandClick('expanded-timeline')}
                            >
                                Press to see my Work Experience
                            </button>
                        </div>
                    </div>

                    {/* Backend Box */}
                    <div className="details-container-with-btn relative p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center min-h-[300px] xl:h-34vh">
                        <h2 className="experience-sub-title text-lg md:text-xl font-semibold text-text-primary mb-8 xl:mb-24">Backend Development</h2>
                        <div className="article-container flex flex-row flex-wrap justify-center gap-10 text-left mb-28">
                            {backendSkills.map(skill => (
                                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                        <div className="expand-button-container absolute w-full bottom-0 left-0 text-center px-6">
                            <button
                                className="expand-btn font-extrabold transition-all duration-300 ease-in-out w-full xl:w-4/5 mb-8 xl:mr-12 h-24 rounded-2xl text-white border border-white/30 shadow-md hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 active:shadow-inner bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${bgEducation})` }}
                                data-target="expanded-timeline-2"
                                onClick={() => handleExpandClick('expanded-timeline-2')}
                            >
                                Press to see my Education
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Down Arrow Icon - hidden on smaller screens */}
            <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow hidden xl:block absolute -right-20 bottom-16 cursor-pointer text-3xl text-black hover:text-gray-500"
                onClick={handleScrollToProjects}
                aria-label="Go to projects section"
            />

            {/* --- Conditionally Rendered Timelines (Phase 3) --- */}
            {openSectionId === 'expanded-timeline' && (
                <TimelineSection
                    id="expanded-timeline"
                    title="Work Experience"
                    data={workExperienceData} // Pass actual data
                    onClose={() => setOpenSectionId(null)}
                />
            )}
            {openSectionId === 'expanded-timeline-2' && (
                <TimelineSection
                    id="expanded-timeline-2"
                    title="Education"
                    data={educationData} // Pass actual data
                    onClose={() => setOpenSectionId(null)}
                />
            )}

        </section>
    );
};

export default ExperienceSection;