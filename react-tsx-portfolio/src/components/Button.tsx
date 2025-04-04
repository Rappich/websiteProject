import React from 'react';
import clsx from 'clsx';

/**
 * Props for the Button component.
 * 
 * @typedef {Object} ButtonProps
 * @property {'primary' | 'secondary'} variant - Determines the button style.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Optional click handler.
 * @property {React.ReactNode} children - Content inside the button.
 * @property {string} [className] - Optional additional CSS classes.
 * @property {'button' | 'submit' | 'reset'} [type='button'] - Button type, defaults to 'button'.
 * @property {string} [href] - If provided, renders the button as a link.
 * @property {string} [target] - Specifies where to open the link.
 * @property {string} [rel] - Specifies the relationship between the current document and the link.
 */
interface ButtonProps {
    variant: 'primary' | 'secondary';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    rel?: string;
}

/**
 * Button component.
 * 
 * A reusable button component that supports two variants: 'primary' and 'secondary'.
 * It can render as either a `<button>` or an `<a>` tag depending on the presence of the `href` prop.
 * 
 * Features:
 * - Supports custom styles via the `className` prop.
 * - Includes hover effects and smooth transitions.
 * - Adds security attributes for external links when `target="_blank"` is used.
 * 
 * @component
 * @param {ButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} The rendered Button component.
 */
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
    // Base styles applied to all buttons
    const baseStyles =
        'font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full border-[0.1rem]';

    // Styles applied based on the `variant` prop
    const variantStyles =
        variant === 'primary'
            ? 'bg-text-dark text-white border-text-dark hover:bg-black hover:border-black' // Primary button styles
            : 'bg-transparent text-text-dark border-text-dark hover:bg-text-dark hover:text-white hover:border-text-dark'; // Secondary button styles

    // Combine base styles, variant styles, and any additional classes
    const combinedClassName = clsx(baseStyles, variantStyles, className);

    // Render an anchor tag if `href` is provided
    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                target={target}
                rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} // Add security attributes for external links
                onClick={onClick as any} // Cast onClick to any for anchor compatibility
            >
                {children}
            </a>
        );
    }

    // Render a button tag if `href` is not provided
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
