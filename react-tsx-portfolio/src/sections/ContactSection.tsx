import React from 'react';
import emailIcon from '/assets/email.png';
import linkedinIcon from '/assets/linkedin.png';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="flex justify-center flex-col pt-[4vh] px-[5%] xl:px-40 h-[30vh] xl:h-60vh box-border">
            <p className="section__text__p1 text-center font-semibold">Get in Touch</p>
            <h1 className="title text-3xl xl:text-5xl text-center font-bold mb-4">Contact Me</h1>
            <div className="contact-info-upper-container flex flex-wrap justify-center rounded-2xl border-[0.1rem] border-border-light bg-bg-light my-8 mx-auto p-2">
                <div className="contact-info-container flex items-center justify-center gap-2 m-0 sm:m-4">
                    <img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon h-10 cursor-default" />
                    <p className='text-base sm:text-lg'>
                        <a href="mailto:fredrik-martensson@live.se" className='hover:underline hover:text-text-dark'>
                            fredrik-martensson@live.se
                        </a>
                    </p>
                </div>
                <div className="contact-info-container flex items-center justify-center gap-2 m-0 sm:m-4">
                    <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon h-8 cursor-default" />
                    <p className='text-base sm:text-lg'>
                        <a href="https://www.linkedin.com/in/fredrik-m%C3%A5rtensson-6b3092138/" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-text-dark'>
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;