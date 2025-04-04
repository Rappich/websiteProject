import React from 'react';
import clsx from 'clsx';

// Define expected properties for the button
// This interface defines the expected properties for the Button component
// It includes variant, onClick, children, className, type, href, target, and rel
// variant: 'primary' | 'secondary' indicates the button style
interface ButtonProps {
    variant: 'primary' | 'secondary';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Optional click handler function
    children: React.ReactNode; // Content inside the button
    className?: string; // Optional additional classes
    type?: 'button' | 'submit' | 'reset'; // Default is 'button'
    href?: string; // For making the button act like a link
    target?: string; // For link target (_blank, etc.)
    rel?: string; // For link rel (noopener noreferrer)
}

const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    children,
    className = '',
    type = 'button',
    href,
    target,
    rel,
}) => {
    // Base styles common to all buttons
    const baseStyles = 'font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full border-[0.1rem]';
    // Variant specific styles (approximated from your CSS logic)
    const variantStyles = variant === 'primary' // btn-color-1
        ? 'bg-text-dark text-white border-text-dark hover:bg-black hover:border-black'
        : // btn-color-2 (secondary)
        'bg-transparent text-text-dark border-text-dark hover:bg-text-dark hover:text-white hover:border-text-dark'; // Ensure hover border matches bg

    // Combine classes using clsx
    const combinedClassName = clsx(baseStyles, variantStyles, className);

    // If href is provided, render an anchor tag styled as a button
    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                target={target}
                rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
                onClick={onClick as any}
            >
                {children}
            </a>
        );
    }

    // Otherwise, render a button tag
    return (
        <button
            type={type}
            className={combinedClassName}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;