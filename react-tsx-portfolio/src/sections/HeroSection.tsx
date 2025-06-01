import React from 'react';
import Button from '../components/Button';
import profilePic from '/assets/cvbild.jpg';
import resumePdf from '/assets/Fredrik_Rappich_CV_0410_ENG.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const HeroSection: React.FC = () => {

    const handleDownloadCv = () => {
        window.open(resumePdf, '_blank');
    };


    const handleScrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="profile"
            className="flex flex-col xl:flex-row items-center justify-center min-h-screen gap-8 px-5 pt-4 pb-6 sm:pb-20 xl:px-8 xl:pt-8 xl:pb-32"

        >
            <div className="w-40 h-40 sm:w-64 sm:h-64 xl:w-[400px] xl:h-[400px] flex justify-center items-center">
                <div className="w-full h-full object-cover rounded-full">
                    <img
                        src={profilePic}
                        alt="Fredrik Rappich profile picture"
                        className="profile-picture w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
            <div className="section__text text-center max-w-sm w-full">
                <p className="text-sm  text-gray-600 font-semibold">Hello, I'm</p>
                <h1 className="title text-2xl sm:text-3xl xl:text-5xl my-2  text-gray-600 font-bold">Fredrik Rappich</h1>
                <p className="section__text__p2 text-base sm:text-lg xl:text-xl mb-4 font-semibold">
                    Software Developer
                </p>

                <div className="btn-container flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full max-w-xs mx-auto">
                    <Button variant="secondary" onClick={handleDownloadCv} className="w-40 sm:w-auto">
                        Download CV
                    </Button>
                    <Button variant="primary" onClick={handleScrollToContact} className="w-40 sm:w-auto">
                        Contact Info
                    </Button>
                </div>

                <div id="socials-container" className="flex justify-center gap-2 mt-6">
                    <ul className="social-icons flex gap-4 list-none p-0 m-0">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/fredrik-m%C3%A5rtensson-6b3092138/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="block p-2 text-black hover:text-text-dark"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl sm:text-3xl" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Rappich"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="block p-2 text-black hover:text-text-dark"
                            >
                                <FontAwesomeIcon icon={faGithub} className="text-2xl sm:text-3xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;