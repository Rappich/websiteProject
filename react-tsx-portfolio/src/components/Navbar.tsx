import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    ];

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
            <nav className="hidden md:flex justify-between items-center py-6 w-full px-6">
                <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
                    <div className="logo text-xl xl:text-3xl cursor-default">Fredrik Rappich</div>
                    <ul className="nav-links flex gap-6 list-none m-0 p-0">
                        {renderLinks(false)}
                    </ul>
                </div>
            </nav>

            <nav id="hamburger-nav" className="flex md:hidden justify-between items-center py-4 px-6 w-full">
                <div className="logo text-xl cursor-default">Fredrik Rappich</div>
                <div className="hamburger-menu relative inline-block">
                    <div
                        className="hamburger-icon flex items-center cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        role="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faTimes : faBars}
                            className="text-black text-2xl transition-all duration-300 ease-in-out"
                        />
                    </div>
                    <div
                        id="mobile-menu"
                        className={clsx(
                            'menu-links absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ease-in-out shadow-md z-20',
                            isMenuOpen && 'max-h-screen p-4'
                        )}
                    >
                        <ul className="flex flex-col gap-2 text-center list-none m-0">
                            {renderLinks(true)}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
