import React, { useRef } from 'react';
import { NavigationArrow, CloseButton } from '../components/Navigation';
import { useInView } from 'react-intersection-observer';
import SwitchToggle from '../components/SwitchToggle';
import Timeline, { TimelineEntry } from '../components/Timeline';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const AboutSection: React.FC = () => {
    const [openSectionId, setOpenSectionId] = React.useState<string | null>(null);
    const showCloseButton = openSectionId !== null;
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    const workTimelineRef = useRef<HTMLDivElement>(null);
    const educationTimelineRef = useRef<HTMLDivElement>(null);

    const handleExpandClick = (targetId: string) => {
        setOpenSectionId((prevId) => {
            const newId = prevId === targetId ? null : targetId;
            setTimeout(() => {
                if (newId === 'expanded-timeline') {
                    workTimelineRef.current?.scrollIntoView({ behavior: 'smooth' });
                } else if (newId === 'expanded-timeline-2') {
                    educationTimelineRef.current?.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);

            return newId;
        });
    };
    const handleCloseTimeline = () => {
        setOpenSectionId(null);
    };

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
    return (
        <section
            id="about"
            ref={ref}
            className="relative pt-6 pb-20 px-5 xl:px-10 min-h-fit box-border max-w-screen-xl mx-auto"
        >
            <p className="section__text__p1 text-center  text-gray-600 font-semibold">Get To Know More</p>
            <h1 className="title text-3xl xl:text-5xl  text-gray-600 text-center font-bold">About Me</h1>

            <div className="flex flex-col xl:flex-row gap-8 mt-8">
                <div className="w-full xl:w-1/3 flex justify-center xl:justify-start">
                    <div className="w-[80%] max-w-[300px] sm:max-w-[350px] md:max-w-[300px] xl:max-w-[500px] aspect-square shrink-0">
                        <img
                            src="/assets/MC4.jpg"
                            alt="Profile picture"
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="w-full xl:w-2/3 flex flex-col gap-8">
                    <div className="max-w-4xl mx-auto text-center xl:text-left">
                        <p>
                            I've transitioned from crafting HR strategies to diving into system development, a move that feels surprisingly natural. Turns out, problem-solving skills are pretty universal, whether you're optimizing workflows or debugging code. Leading projects in my previous roles taught me a lot about breaking down complex issues and building effective solutions, which is exactly what I'm doing now with code. I'm finding that my knack for understanding how things work, and how people interact with systems, is just as valuable in tech as it was in HR. Currently, I'm fully immersed in system development studies, eager to apply my unique perspective and build something cool.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto text-center xl:text-left xl:ml-0 xl:mr-auto xl:px-0 w-full flex flex-wrap xl:flex-nowrap gap-8 justify-center xl:justify-start">

                        <div className="flex flex-wrap flex-col sm:flex-row xl:flex-nowrap gap-8 justify-center w-full">
                            <div className="flex flex-col pt-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center">
                                <img src="/assets/experience.png" alt="Experience icon" className="icon h-8 mx-auto" />
                                <h3 className="font-semibold text-lg my-2">Professional Background</h3>
                                <p className="text-text-primary">
                                    9+ years <br /> Strategic HR and process optimization
                                </p>
                                <div className="switch-container w-full pt-2 flex justify-start items-center pl-4 pb-4 mt-auto">
                                    <SwitchToggle
                                        id="work-experience-toggle"
                                        labelText="Show Work Experience"
                                        checked={openSectionId === 'expanded-timeline'}
                                        onChange={() => handleExpandClick('expanded-timeline')}
                                    />

                                </div>
                            </div>

                            <div className="flex flex-col pt-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center">
                                <img src="/assets/education.png" alt="Education icon" className="icon h-8 mx-auto" />
                                <h3 className="font-semibold text-lg my-2">Education</h3>
                                <p className="text-text-primary">
                                    B.Sc. Psychology <br /> System Development (Current)
                                </p>
                                <div className="switch-container w-full pt-2 flex justify-start items-center pl-4 pb-4 mt-auto">
                                    <SwitchToggle
                                        id="education-toggle"
                                        labelText="Show Education"
                                        checked={openSectionId === 'expanded-timeline-2'}
                                        onChange={() => handleExpandClick('expanded-timeline-2')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {openSectionId === 'expanded-timeline' && (
                <div ref={workTimelineRef}>
                    <Timeline
                        id="expanded-timeline"
                        title="Work Experience"
                        data={workExperienceData}
                        onClose={handleCloseTimeline}
                    />
                </div>
            )}
            {openSectionId === 'expanded-timeline-2' && (
                <div ref={educationTimelineRef}>
                    <Timeline
                        id="expanded-timeline-2"
                        title="Education"
                        data={educationData}
                        onClose={handleCloseTimeline}
                    />
                </div>
            )}


            <div className="mt-8 pb-6 flex justify-center gap-4">
                {openSectionId === null && (
                    <NavigationArrow
                        targetId="experience"
                        ariaLabel="Go to experience section"
                        isVisible={inView}
                    />
                )}
                {showCloseButton && (
                    <CloseButton
                        onClick={() => {
                            handleCloseTimeline();
                            setTimeout(() => {
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}
                        ariaLabel="Close section"
                        icon={faTimes}
                        isVisible={true}
                    />
                )}
            </div>
        </section>

    );
};

export default AboutSection;