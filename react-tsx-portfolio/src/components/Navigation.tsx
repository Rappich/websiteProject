import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const commonFixedClasses = "arrow absolute right-12 bottom-16 z-10 cursor-pointer text-3xl text-black hover:text-gray-500 transition-opacity duration-300 ease-in-out hidden xl:inline-flex xl:items-center xl:justify-center";

const visibilityClass = (isVisible: boolean) => isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none';

interface NavigationArrowProps {
    targetId: string;
    ariaLabel: string;
    isVisible: boolean;
    icon?: IconDefinition;
    className?: string;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({
    targetId,
    ariaLabel,
    isVisible,
    icon = faArrowDown,
    className = '',
}) => {

    const handleScroll = () => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <FontAwesomeIcon
            icon={icon}
            className={`${commonFixedClasses} ${visibilityClass(isVisible)} ${className}`}
            onClick={handleScroll}
            aria-label={ariaLabel}
        />
    );
};

interface CloseButtonProps {
    onClick: () => void;
    ariaLabel: string;
    isVisible: boolean;
    icon?: IconDefinition;
    className?: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
    onClick,
    ariaLabel,
    isVisible,
    icon = faTimes,
    className = '',
}) => {

    return (
        <FontAwesomeIcon
            icon={icon}
            className={`${commonFixedClasses} ${visibilityClass(isVisible)} ${className}`}
            onClick={onClick}
            aria-label={ariaLabel}
        />
    );
};
