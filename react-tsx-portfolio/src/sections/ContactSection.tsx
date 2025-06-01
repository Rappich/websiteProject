import React from 'react';
import emailIcon from '/assets/email.png';
import linkedinIcon from '/assets/linkedin.png';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl xl:max-w-6xl mx-auto pb-32 sm:pb-32 xl:pb-40">
                <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
                    <p className="text-center font-semibold text-gray-600">Get in Touch</p>
                    <h1 className="text-3xl xl:text-5xl text-center font-bold text-gray-700 mb-4">
                        Contact Me
                    </h1>

                    <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-8 sm:gap-12 mt-8 p-4 sm:p-6 bg-bg-light rounded-2xl border border-border-light">
                        <div className="flex items-center gap-4 sm:gap-6">
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
                        <div className="flex items-center gap-4 sm:gap-6">
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
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
