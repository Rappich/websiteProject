import React from 'react';
import clsx from 'clsx';

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
    const baseStyles =
        'font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full border-[0.1rem]';

    const variantStyles =
        variant === 'primary'
            ? 'bg-text-dark text-white border-text-dark hover:bg-black hover:border-black' // Primary button styles
            : 'bg-transparent text-text-dark border-text-dark hover:bg-text-dark hover:text-white hover:border-text-dark'; // Secondary button styles

    const combinedClassName = clsx(baseStyles, variantStyles, className);

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
