import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For internal navigation
import clsx from 'clsx';
// Import FontAwesome if using for icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    // --- State for Mobile Menu (Added in Phase 3) ---
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // --- Handler for Mobile Menu (Added in Phase 3) ---
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinksData = [
        { href: '#about', text: 'About', internal: true },
        { href: '#experience', text: 'Experience', internal: true },
        { href: '#projects', text: 'Portfolio', internal: true },
        { href: '#contact', text: 'Contact', internal: true },
        { href: '/company', text: 'My Company', internal: false }, // Use path for React Router Link
    ];

    const renderLinks = (isMobile: boolean = false) =>
        navLinksData.map((link) => (
            <li key={link.text}>
                {link.internal ? (
                    // Use regular anchor for same-page scroll links
                    <a
                        href={link.href}
                        className="text-base xl:text-2xl text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-border-medium transition-all duration-300 ease-in-out block p-[10px] text-center xl:p-0 xl:inline" // Base mobile styles, xl overrides for desktop link style
                        onClick={isMobile ? toggleMenu : undefined} // Close menu on mobile click
                    >
                        {link.text}
                    </a>
                ) : (
                    // Use Link component for routing to different pages
                    <Link
                        to={link.href}
                        className="text-base xl:text-2xl text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-border-medium transition-all duration-300 ease-in-out block p-[10px] text-center xl:p-0 xl:inline"
                        onClick={isMobile ? toggleMenu : undefined}
                    >
                        {link.text}
                    </Link>
                )}
            </li>
        ));

    return (
        <>
            {/* --- Desktop Navigation --- */}
            <nav id="desktop-nav" className="hidden xl:flex justify-around items-center h-17vh">
                <div className="logo text-xl xl:text-3xl cursor-default">Fredrik Rappich</div>
                <ul className="nav-links flex flex-row gap-8 list-none"> {/* Desktop uses row, specific gap */}
                    {renderLinks()}
                </ul>
            </nav>

            {/* --- Hamburger Navigation --- */}
            <nav id="hamburger-nav" className="flex xl:hidden justify-between items-center h-17vh px-[5%]"> {/* Show only below xl, use % padding */}
                <div className="logo text-xl cursor-default">Fredrik Rappich</div>
                <div className="hamburger-menu relative inline-block">
                    {/* Hamburger Icon Button */}
                    <div
                        className="hamburger-icon flex flex-col justify-between h-[24px] w-[30px] cursor-pointer"
                        onClick={toggleMenu} // Added in Phase 3
                        aria-label="Toggle menu"
                        role="button"
                        aria-expanded={isMenuOpen}
                    >
                        {/* Icon Lines - classes change based on isMenuOpen state */}
                        <span className={clsx('block w-full h-[2px] bg-black transition-all duration-300 ease-in-out', isMenuOpen && 'rotate-45 translate-y-[7px]')}></span>
                        <span className={clsx('block w-full h-[2px] bg-black transition-all duration-300 ease-in-out', isMenuOpen && 'opacity-0')}></span>
                        <span className={clsx('block w-full h-[2px] bg-black transition-all duration-300 ease-in-out', isMenuOpen && '-rotate-45 -translate-y-[7px]')}></span>
                        {/* Alternative using FontAwesome: */}
                        {/* <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-[24px] w-[30px] text-black" /> */}
                    </div>
                    {/* Mobile Menu Links Dropdown */}
                    <div
                        className={clsx(
                            'menu-links absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ease-in-out shadow-md z-20', // Added z-index
                            isMenuOpen && 'max-h-[300px]' // Toggle max-height based on state
                        )}
                    >
                        <ul className="flex flex-col gap-2 text-center list-none m-0 p-0"> {/* Mobile column, specific gap */}
                            {renderLinks(true)}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;