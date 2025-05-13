import React from 'react';
import emailIcon from '/assets/email.png';
import linkedinIcon from '/assets/linkedin.png';

const ContactSection: React.FC = () => {
    return (
        <section
            id="contact"
            className="flex flex-col justify-center pt-[4vh] px-[5%] xl:px-40 h-auto xl:h-[60vh] box-border"
        >
            <p className="section__text__p1 text-center font-semibold">Get in Touch</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold mb-4">
                Contact Me
            </h1>
            <div className="contact-info-container flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12 my-8 mx-auto p-4 sm:p-6 bg-bg-light rounded-2xl border-[0.1rem] border-border-light">
                {/* Email */}
                <div className="contact-info-item flex items-center justify-start gap-4 sm:gap-6">
                    <img
                        src={emailIcon}
                        alt="Email icon"
                        className="h-10 sm:h-12 cursor-pointer"
                    />
                    <p className="text-base sm:text-lg">
                        <a
                            href="mailto:fredrik-martensson@live.se"
                            className="hover:underline hover:text-text-dark"
                        >
                            fredrik-martensson@live.se
                        </a>
                    </p>
                </div>
                {/* LinkedIn */}
                <div className="contact-info-item flex items-center justify-start gap-4 sm:gap-6">
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn icon"
                        className="h-8 sm:h-10 cursor-pointer"
                    />
                    <p className="text-base sm:text-lg">
                        <a
                            href="https://www.linkedin.com/in/fredrik-m%C3%A5rtensson-6b3092138/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-text-dark"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
