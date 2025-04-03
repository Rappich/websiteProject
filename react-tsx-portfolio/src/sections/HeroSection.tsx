import React from 'react';
import Button from '../components/Button'; // Import reusable button
import profilePic from '../assets/cvbild.jpg'; // Import assets
import resumePdf from '../assets/resume-example.pdf'; // Assuming PDF is in assets

// Import FontAwesome if using
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const HeroSection: React.FC = () => {

    // --- Handlers (Added in Phase 3) ---
    const handleDownloadCv = () => {
        window.open(resumePdf, '_blank'); // Open PDF in new tab
    };

    const handleScrollToContact = () => {
        // Simple scroll for now, enhance later if needed
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="profile" className="flex flex-col xl:flex-row items-center justify-center gap-20 px-[5%] xl:px-40 min-h-fit xl:min-h-0 h-fit xl:h-80vh pb-0 xl:pb-32 mb-0 xl:mb-24 pt-[4vh]">
            {/* Picture Container */}
            {/* Applying responsive sizes directly */}
            <div className="section__pic-container w-auto h-[46vw] justify-center sm:w-[275px] sm:h-[275px] xl:w-[400px] xl:h-[400px] flex items-center mx-auto my-0 mb-8 xl:mx-0 xl:my-auto">
                <div className="profile-picture-container w-full sm:w-[275px] sm:h-[275px] xl:w-[350px] xl:h-[350px] flex justify-center items-center m-[10px] mx-auto">
                    <img
                        src={profilePic}
                        alt="Fredrik Rappich profile picture"
                        className="profile-picture w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>

            {/* Text Container */}
            <div className="section__text self-center text-center">
                <p className="section__text__p1 font-semibold text-center">Hello, I'm </p>
                <h1 className="title text-3xl xl:text-5xl text-center my-2 font-bold">Fredrik Rappich</h1>
                <p className="section__text__p2 text-lg xl:text-xl mb-4 font-semibold">Software Developer</p> {/* Using xl text-xl as 1.75rem approx */}

                {/* Button Container */}
                <div className="btn-container flex flex-wrap flex-row sm:flex-col items-center justify-center gap-2 mt-2">
                    {/* Use flex-row on mobile as per original visual, sm:flex-col based on your css? Check this */}
                    <div className="contact-btns flex flex-wrap justify-center gap-4">
                        <Button variant="secondary" onClick={handleDownloadCv}>
                            Download CV
                        </Button>
                        <Button variant="primary" onClick={handleScrollToContact}>
                            Contact info
                        </Button>
                    </div>

                    {/* Socials Container */}
                    <div id="socials-container" className="flex justify-center gap-1 mt-4">
                        <ul className="social-icons flex justify-center gap-0 list-none p-0 m-0">
                            <li className='m-[5px]'>
                                <a href="https://www.linkedin.com/in/fredrik-m%C3%A5rtensson-6b3092138/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className='block p-[10px] text-black hover:text-text-dark'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" /> {/* Adjust size */}
                                </a>
                            </li>
                            <li className='m-[5px]'>
                                <a href="https://github.com/Rappich" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className='block p-[10px] text-black hover:text-text-dark'>
                                    <FontAwesomeIcon icon={faGithub} className="text-3xl" /> {/* Adjust size */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;