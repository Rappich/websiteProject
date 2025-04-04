import React from 'react';
// Import assets
import aboutPic from '../assets/MC4.jpg';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
// Import FontAwesome if using for arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

/**
 * The `AboutSection` component represents the "About Me" section of a portfolio website.
 * It includes a profile picture, professional background, education details, and a brief description.
 * The section is responsive and adapts its layout for different screen sizes.
 *
 * Features:
 * - Displays a profile picture with a rounded design.
 * - Provides a summary of professional experience and education in styled containers.
 * - Includes a descriptive text about the individual's career transition and skills.
 * - Contains a smooth scroll functionality to navigate to the "Experience" section using an arrow icon.
 *
 * @component
 * @returns {JSX.Element} The rendered "About Me" section.
 */
const AboutSection: React.FC = () => {
    // Handler for arrow click (simple scroll)
    const handleScrollToExperience = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="relative pt-[4vh] px-[5%] xl:px-10 min-h-fit xl:h-94vh box-border max-w-screen-xl mx-auto">
            <p className="section__text__p1 text-center font-semibold">Get To Know More</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold">About Me</h1>

            {/* Main container for picture and details */}
            {/* Uses block layout on small screens, flex on xl+ */}
            <div className="section-container block xl:flex gap-16 xl:h-fit mt-0 xl:mt-8">

                {/* Picture container */}
                <div className="section__pic-container w-auto h-[46vw] justify-center sm:w-[275px] sm:h-[275px] xl:w-[400px] xl:h-[400px] flex items-center mx-auto my-0 mt-8 xl:mt-0 mb-8 xl:mx-0 xl:my-auto xl:-translate-x-1/5">
                    {/* Add transform only on xl screens */}
                    <img src={aboutPic} alt="Profile picture" className="about-pic rounded-2xl w-full h-full object-cover" />
                </div>

                {/* Details container */}
                <div className="about-details-container flex justify-center flex-col max-w-[90%] xl:max-w-[70%] mx-auto">
                    {/* Top boxes for experience/education summary */}
                    <div className="about-containers flex flex-wrap xl:flex-nowrap gap-8 mb-8 mt-0 xl:mt-8 justify-center">
                        {/* Experience Box */}
                        <div className="details-container p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center">
                            <img src={experienceIcon} alt="Experience icon" className="icon h-8 mx-auto" />
                            <h3 className='font-semibold text-lg my-2'>Professional Background</h3>
                            <p className='text-text-primary'>9+ years <br /> Strategic HR and process optimization</p>
                        </div>
                        {/* Education Box */}
                        <div className="details-container p-6 flex-1 bg-white rounded-2xl border-[0.1rem] border-border-light text-center">
                            <img src={educationIcon} alt="Education icon" className="icon h-8 mx-auto" />
                            <h3 className='font-semibold text-lg my-2'>Education</h3>
                            <p className='text-text-primary'>B.Sc. Psychology <br /> System Development (Current)</p>
                        </div>
                    </div>
                    {/* Text description */}
                    <div className="text-container text-justify xl:text-left">
                        <p>
                            I've transitioned from crafting HR strategies to diving into system development, a move that
                            feels surprisingly natural. Turns out, problem-solving skills are pretty universal, whether
                            you're optimizing workflows or debugging code. Leading projects in my previous roles taught me a
                            lot about breaking down complex issues and building effective solutions, which is exactly what
                            I'm doing now with code. I'm finding that my knack for understanding how things work, and how
                            people interact with systems, is just as valuable in tech as it was in HR. Currently, I'm fully
                            immersed in system development studies, eager to apply my unique perspective and build something
                            cool.
                        </p>
                    </div>
                </div>
            </div>

            {/* Down Arrow Icon - hidden on smaller screens */}
            {/* Use Font Awesome Icon */}
            <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow hidden xl:block absolute right-1 bottom-16 cursor-pointer text-3xl text-black hover:text-gray-500"
                onClick={handleScrollToExperience}
                aria-label="Go to experience section"
            />
            {/* Or use img if preferred: <img src="..." className="icon arrow ..." /> */}
        </section>
    );
};

export default AboutSection;