import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Navbar component
// This component renders a responsive navigation bar with links to different sections of the website
// It uses FontAwesome icons for the hamburger menu and includes a logo
// The navigation links are conditionally rendered based on the screen size (desktop or mobile)
export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinksData = [
        { href: '#about', text: 'About', internal: true },
        { href: '#experience', text: 'Experience', internal: true },
        { href: '#projects', text: 'Portfolio', internal: true },
        { href: '#contact', text: 'Contact', internal: true },
        { href: '/company', text: 'My Company', internal: false },
    ];

    // Function to render the navigation links
    // This function takes a boolean parameter isMobile to determine if the links are being rendered for mobile or desktop view
    // It maps over the navLinksData array and returns a list item for each link
    const renderLinks = (isMobile: boolean = false) =>
        navLinksData.map((link) => (
            <li key={link.text}>
                {link.internal ? (
                    <a
                        href={link.href}
                        className="block p-[10px] text-center text-base xl:text-2xl text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-border-medium transition-all duration-300 ease-in-out xl:p-0 xl:inline"
                        onClick={isMobile ? toggleMenu : undefined}
                    >
                        {link.text}
                    </a>
                ) : (
                    <Link
                        to={link.href}
                        className="block p-[10px] text-center text-base xl:text-2xl text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-border-medium transition-all duration-300 ease-in-out xl:p-0 xl:inline"
                        onClick={isMobile ? toggleMenu : undefined}
                    >
                        {link.text}
                    </Link>
                )}
            </li>
        ));

    return (
        <>
            {/* Desktop Navigation */}
            {/* This navigation bar is hidden on mobile devices and displayed on larger screens */}
            <nav id="desktop-nav" className="hidden xl:flex justify-around items-center h-17vh">
                <div className="logo text-xl xl:text-3xl cursor-default">Fredrik Rappich</div>
                <ul className="nav-links flex flex-row gap-8 list-none m-0 p-0">
                    {renderLinks(false)}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            {/* This navigation bar is displayed on mobile devices and hidden on larger screens */}
            {/* It includes a hamburger menu icon that toggles the visibility of the links */}
            {/* The links are displayed in a vertical list when the menu is open */}
            {/* The menu is hidden by default and expands when the hamburger icon is clicked */}
            {/* The menu closes when a link is clicked */}
            <nav id="hamburger-nav" className="flex xl:hidden justify-between items-center h-17vh px-[5%]">
                <div className="logo text-xl cursor-default">Fredrik Rappich</div>
                <div className="hamburger-menu relative inline-block">
                    <div
                        className="hamburger-icon flex items-center cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        role="button"
                        aria-expanded={isMenuOpen}
                    >

                        <FontAwesomeIcon
                            icon={isMenuOpen ? faTimes : faBars}
                            className="text-black text-2xl transition-all duration-300 ease-in-out"
                        />
                    </div>

                    <div
                        className={clsx(
                            'menu-links absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ease-in-out shadow-md z-20',
                            isMenuOpen && 'max-h-[300px]'
                        )}
                    >
                        <ul className="flex flex-col gap-2 text-center list-none m-0 p-4">
                            {renderLinks(true)}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
