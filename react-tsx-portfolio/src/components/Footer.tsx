import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routes

const Footer: React.FC = () => {
    const navLinksData = [
        { href: '#about', text: 'About', internal: true },
        { href: '#experience', text: 'Experience', internal: true },
        { href: '#projects', text: 'Portfolio', internal: true },
        { href: '#contact', text: 'Contact', internal: true },
    ];

    return (
        <footer className="pt-8 mx-4 flex flex-col items-center justify-center">
            <nav className="mb-8">
                <div className="nav-links-container">
                    <ul className="nav-links flex flex-col gap-4 text-center lg:flex-row xl:gap-8 list-none m-0 p-0">
                        {navLinksData.map((link) => (
                            <li key={link.text}>
                                {link.internal ? (
                                    <a
                                        href={link.href}
                                        className="text-base xl:text-2xl text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-border-medium"
                                        aria-label={link.text}
                                    >
                                        {link.text}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="text-base xl:text-2xl text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-border-medium"
                                        aria-label={link.text}
                                    >
                                        {link.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <p className="text-center text-text-primary">
                Copyright &#169; 2025 Fredrik Rappich. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
